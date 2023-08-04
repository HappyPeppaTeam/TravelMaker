<?php session_start(); ?>
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

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
    setcookie('token',$setToken[0]->token,time() + 600,'/');
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