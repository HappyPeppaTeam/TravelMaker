<?php session_start(); ?>
<?php

use App\Http\Controllers\JourneyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\AlbumController;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Redirect;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/albums/{token}', function ($token) {
    $albums = DB::select('CALL GetAlbumsAndPhotos(?)', [$token]);

    $result = [];
    foreach ($albums as $album) {
        $albumData = [
            'album_id' => $album->album_id,
            'album_name' => $album->album_name,
            'tag' => $album->tag,
            'description' => $album->description,
            'photos' => [],
        ];

        // 判斷相簿資料是否已經存在 results 內
        if (!isset($result[$album->album_id])) {
            $result[$album->album_id] = $albumData;
        }

        // 將相片資訊加入對應相簿中的 photos 陣列
        $result[$album->album_id]['photos'][] = [
            'image_id' => $album->image_id,
            'image_name' => $album->image_name,
            'image_url' => $album->image_url,
        ];
    }

    // 重新索引陣列，以移除原始的 album_id 作為索引
    $result = array_values($result);

    return response()->json(['data' => $result]);
});

Route::post('/albums/{token}', [AlbumController::class, 'createAlbum']);

Route::delete('albums/{token}/{album_id}', function (Request $request, $token, $album_id) {
    // 檢查請求中的 token 是否合法
    $user = DB::table('users')->where('token', $token)->first();
    if (!$user) {
        return response()->json(['message' => 'Unauthorized'], 401);
    }

    // 檢查使用者是否擁有該相簿，確保只有相簿擁有者能刪除
    $album = DB::table('albums')->where('album_id', $album_id)->where('user_id', $user->user_id)->first();
    if (!$album) {
        return response()->json(['message' => 'Album not found or unauthorized'], 404);
    }

    // 刪除相簿及其相片
    DB::table('album_photos')->where('album_id', $album_id)->delete();
    DB::table('albums')->where('album_id', $album_id)->delete();

    return response()->json(['message' => 'Album deleted successfully']);
});

Route::delete('albums/{token}', function (Request $request, $token) {
    // 檢查請求中的 token 是否合法，以確保只有合法用戶能刪除相簿
    $user = DB::table('users')->where('token', $token)->first();
    if (!$user) {
        return response()->json(['message' => 'Unauthorized'], 401);
    }

    // 刪除使用者的所有相簿及其相片
    DB::table('album_photos')->whereIn('album_id', function ($query) use ($user) {
        $query->select('album_id')->from('albums')->where('user_id', $user->user_id);
    })->delete();

    DB::table('albums')->where('user_id', $user->user_id)->delete();

    return response()->json(['message' => '成功清除所有相簿及內容']);
});

Route::post('/albums/{token}/{album_id}', function (Request $request, $token, $album_id) {
    // 使用 token 查詢使用者
    $user = DB::table('users')->where('token', $token)->first();

    // 確保使用者存在且 token 正確
    if (!$user) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    // 使用交易來更新相簿和相片資訊
    DB::beginTransaction();

    try {
    //     // 更新相簿資訊
        DB::table('albums')
            ->where('album_id', $album_id)
            ->where('user_id', $user->user_id)
            ->update([
                'album_name' => $request->input('album_name'),
                'tag' => $request->input('tag'),
                'description' => $request->input('description'),
            ]);
    
        // 移除原有相片
        DB::table('album_photos')
            ->where('album_id', $album_id)
            ->delete();

        // 處理上傳的相片內容
        if ($request->has('images')) {
            $files = $request->file('images');

            foreach ($files as $file) {
                if ($file->isValid()) {
                    // 儲存檔案到 public 目錄，並取得檔案路徑
                    $path = $file->store('images', 'public');

                    // 新增相片資訊到 album_photos 資料表
                    DB::table('album_photos')->insert([
                        'album_id' => $album_id,
                        'image_name' => $file->getClientOriginalName(),
                        'image_url' => $path,
                    ]);
                } else {
                    return response()->json(['error' => '上傳一張或多張圖片失敗'], 500);
                }
            }
        }

        DB::commit();

    } catch (\Exception $e) {
        DB::rollback();
        return response()->json(['error' => 'Error updating album and photos'. $e->getMessage()], 500);
    }
});

Route::post('/register',function(Request $request){
    $userName = $request['username'];
    $password = $request['password'];
    $email = $request['email'];
    $fullName = $request['fullName'];
    $nickName = $request['nickName'];
    $birthday = $request['birthday'];
    $gender = $request['gender'];
    date_default_timezone_set('Asia/Taipei');
    $registerTime = date("Y-m-d H:i:s");
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $check_duble_username=DB::select('select user_id from users where user_name = ?;',[$userName]);
    $check_duble_email=DB::select('select user_id from users where email = ?;',[$email]);
if (empty($check_duble_username)) {
    if (empty($check_duble_email)) {
        $DbResult = DB::select('call register_user(?,?,?,?,?,?,?,?);',[$userName, $hashedPassword,$email,$birthday,$fullName,$nickName,$gender,$registerTime]);
        $regsiterMessage = $DbResult[0]->message;
    }else {
        // $regsiterMessage ='相同email已存在';
        $regsiterMessage = '相同email已存在';
    }
}else{
    $regsiterMessage = '相同帳號已存在';
    // $regsiterMessage ='相同帳號已存在';
}
        $data = [
        "message"=>$regsiterMessage
        ];
    // return $regsiterMessage;
    return response()->json($data, 200);
    // return $check_duble_username;
});

Route::post('/login',function(Request $request){
    $userName = $request['username'];
    $password = $request['password'];
    $user_result = DB::select('call login_user(?);',[$userName]);
    $hashedPasswordFromDB = $user_result[0]->password;
    if (password_verify($password, $hashedPasswordFromDB)) {
       $setToken= DB::select('call set_token(?);',[$userName]);
       $data = [
           "token"=>$setToken[0]->token,
        "message"=>"Password is correct! , and get token",
    ];
    setcookie('token',$setToken[0]->token,time() + 3600,'/');
       return response()->json($data, 200);
        // ->cookie('token',$set_token[0]->token,time() + 120);;
        // 哈希值匹配，可以认为用户提供的密码是正确的
        // $result= array("message"=>"Password is correct! , and get token");
    } else {
        // 哈希值不匹配，密码错误
        // $result= array("message"=>"Password is incorrect!");
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    // return $result;
});
// ->middleware('check.cookie');;

Route::post('/logout',function(Request $request){    
$token = $request['token'];
$unSetToken = DB::select('call unSet_token(?)',[$token]);
return response()->json($unSetToken,200);

});

Route::post('/register',function(Request $request){
    $userName = $request['username'];
    $password = $request['password'];
    $email = $request['email'];
    $fullName = $request['fullName'];
    $nickName = $request['nickName'];
    $birthday = $request['birthday'];
    $gender = $request['gender'];
    date_default_timezone_set('Asia/Taipei');
    $registerTime = date("Y-m-d H:i:s");
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $check_duble_username=DB::select('select user_id from users where user_name = ?;',[$userName]);
    $check_duble_email=DB::select('select user_id from users where email = ?;',[$email]);
if (empty($check_duble_username)) {
    if (empty($check_duble_email)) {
        $DbResult = DB::select('call register_user(?,?,?,?,?,?,?,?);',[$userName, $hashedPassword,$email,$birthday,$fullName,$nickName,$gender,$registerTime]);
        $regsiterMessage = $DbResult[0]->message;
    }else {
        // $regsiterMessage ='相同email已存在';
        $regsiterMessage = '相同email已存在';
    }
}else{
    $regsiterMessage = '相同帳號已存在';
    // $regsiterMessage ='相同帳號已存在';
}
        $data = [
        "message"=>$regsiterMessage
        ];
    // return $regsiterMessage;
    return response()->json($data, 200);
    // return $check_duble_username;
});

Route::post('/login',function(Request $request){
    $userName = $request['username'];
    $password = $request['password'];
    $user_result = DB::select('call login_user(?);',[$userName]);
    $hashedPasswordFromDB = $user_result[0]->password;
    if (password_verify($password, $hashedPasswordFromDB)) {
       $setToken= DB::select('call set_token(?);',[$userName]);
       $data = [
        "message"=>"Password is correct! , and get token",

    ];
    if ($userName==="admin") {
        setcookie('role','admin',time() + 3600,'/');
    }else{
        setcookie('role','user',time() + 3600,'/');
    }
    setcookie('token',$setToken[0]->token,time() + 3600,'/');
    return response()->json($data, 200);
    // ->cookie('token',$set_token[0]->token,time() + 120);;
        // 哈希值匹配，可以认为用户提供的密码是正确的
        // $result= array("message"=>"Password is correct! , and get token");    
    } else {
        // 哈希值不匹配，密码错误
        // $result= array("message"=>"Password is incorrect!");
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    // return $result;
});
// ->middleware('check.cookie');;

Route::post('/logout',function(Request $request){    
$token = $request['token'];
$unSetToken = DB::select('call unSet_token(?)',[$token]);
return response()->json($unSetToken,200);

});
// by cookie/token get profile data
Route::post('/profile',function(Request $request){  
$token = $request['token'];
$getProfile = DB::select("select user_name,full_name,nick_name,email,birthday,gender,head_photo from users where token= ?",[$token]);
$getProfile[0]->head_photo =  Storage::url("{$getProfile[0]->head_photo}");
return response()->json($getProfile,200);
});

//admin get all user
Route::get('/getAllProfileData',function(Request $request){  
$getProfile = DB::select(
"select 
user_id,user_name,full_name,
nick_name,email,birthday,gender,
user_status,register_time
from users");
return response()->json($getProfile,200);
});

//admin更新會員狀態
Route::post('/updateUserStatus', function(Request $request){
    $userId = $request->input('userId');
    $newStatus = $request->input('newStatus');
    DB::select("update users set user_status = ? where user_id = ?",[$newStatus,$userId]);
    // return response()->json(['message' => '會員狀態已更新']);
    return response()->json($request,200);
});

Route::post('/updateProfileImage', [ImageController::class,'upload']);

Route::get('/getArticle/{discussionBoardArea}', function($discussionBoardArea){
    $getArticle=DB::select('CALL GetBoardData(?);',[$discussionBoardArea]);
    return response()->json($getArticle,200);
});

Route::get('/getBoardText/{boardText_id}', function ($board_text_id) {
    // 取得 board_text 資料及關聯的使用者名稱
    $boardText = DB::table('board_text')
        ->select('board_text.text_title', 'board_text.text', 'board_text.Posting_time', 'users.full_name')
        ->join('users', 'board_text.Posting_user_id', '=', 'users.user_id')
        ->where('board_text.board_text_id', $board_text_id)
        ->first();

    // 取得 board_image 資料
    $boardImages = DB::table('board_image')
        ->where('board_text_id', $board_text_id)
        ->get();

    // 將圖片資料放入陣列
    $imageArray = [];
    foreach ($boardImages as $image) {
        $imageArray[] = $image->image_path;
    }

    // 組合回傳的資料物件
    $responseData = [
        'text_title' => $boardText->text_title,
        'text' => $boardText->text,
        'Posting_time' => $boardText->Posting_time,
        'full_name' => $boardText->full_name,
        'images' => $imageArray,
    ];

    return response()->json($responseData, 200);
});
//發布留言api
Route::post('/postMessage',function(Request $request){
$boardTextId=$request['boardTextId'];
$messageText=$request['messageText'];
$userId=$request['userId'];
date_default_timezone_set('Asia/Taipei');
$messageTime=date("Y-m-d H:i:s");
$postMessage=DB::select('call post_message(?,?,?,?)',[$boardTextId,$messageText,$userId,$messageTime]);
return response()->json($postMessage,200);
});
//get文章 boardTextId 下所有留言
Route::get('/getMessage/{boardTextId}',function($boardTextId){
$getMessage=DB::select('select * from message_board where board_text_id = ?',[$boardTextId]);
return response()->json($getMessage,200);
});

Route::get('/auth/google', [AuthController::class,'redirectToGoogle']);

Route::get('/auth/google/callback', [AuthController::class,'handleGoogleCallback']);

Route::get('/auth/google/register/{googleId}&{fullName}&{email}', [AuthController::class,'googleRegister'])->name('google.register');

Route::get('/auth/google/login', [AuthController::class,'googleLogin'])->name('google.login');
//待確認
// Route::post('/updateProfileImage',function(Request $request){
// $token = $request['token'];
// // $updateProfileImage = DB::select("update users set headphoto = ? where token = ?",[$image,$token]);
// return response()->json($request,200);
// });

Route::get('/getJourneys',[JourneyController::class, 'getUserJourneys']);
Route::get('/getEvents',[JourneyController::class, 'getJourneyEvents']);
Route::post('/addJourney',[JourneyController::class, 'addNewJourney']);
