<?php session_start(); ?>
<?php

use App\Http\Controllers\JourneyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\ImageController;


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

Route::post('/profile',function(Request $request){  
$token = $request['token'];
$getProfile = DB::select("select user_name,full_name,nick_name,email,birthday,gender,head_photo from users where token= ?",[$token]);
$getProfile[0]->head_photo =  Storage::url("{$getProfile[0]->head_photo}");

// return response()->json($token,200);
return response()->json($getProfile,200);
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


//待確認
// Route::post('/updateProfileImage',function(Request $request){
// $token = $request['token'];
// // $updateProfileImage = DB::select("update users set headphoto = ? where token = ?",[$image,$token]);
// return response()->json($request,200);
// });

Route::get('/getJourneys',[JourneyController::class, 'getUserJourneys']);
Route::get('/getEvents',[JourneyController::class, 'getJourneyEvents']);
Route::post('/addJourney',[JourneyController::class, 'addNewJourney']);
