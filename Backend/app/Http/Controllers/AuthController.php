<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

class AuthController extends Controller
{
    public function redirectToGoogle()
    {
        return redirect()->away('https://accounts.google.com/o/oauth2/auth?' . http_build_query([
            'client_id' => '302225495868-e6msv3ascfpqkghbrvdu8sa21glfteqi.apps.googleusercontent.com',
            'redirect_uri' => 'http://localhost/TravelMaker/Backend/public/api/auth/google/callback',
            'response_type' => 'code',
            'scope' => 'email profile openid',
            'access_type' => 'offline',
            'prompt' => 'consent',
        ]));
    }

    public function handleGoogleCallback(Request $request)
    {
        // 處理 Google 回調，取得用戶資訊
        $code = $request->input('code');
        // 使用 $code 交換 access_token

        // 使用 access_token 取得用戶資訊
        $response = Http::post('https://oauth2.googleapis.com/token', [
            'client_id' => '302225495868-e6msv3ascfpqkghbrvdu8sa21glfteqi.apps.googleusercontent.com',
            'client_secret' => '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',
            'code' => $code,
            'grant_type' => 'authorization_code',
            'redirect_uri' => 'http://localhost/TravelMaker/Backend/public/api/auth/google/callback',
        ]);

        $accessTokenData = $response->json();
        $accessToken = $accessTokenData['access_token'];
    
        // 使用存取令牌向 Google 發出請求以獲取用戶資訊
        $userInfoResponse = Http::get('https://www.googleapis.com/oauth2/v3/userinfo', [
            'access_token' => $accessToken,
        ]);
    
        $userData = $userInfoResponse->json();

        // 將用戶資訊存入資料庫
        $user = new User();
        $user->googleId = $userData['sub'];
        $user->name = $userData['name'];
        $user->email = $userData['email'];
        
        
// return response()->json($quickRegisterResult,200);
return Redirect::route('google.register',[
    'googleId' => $userData['sub'],
'fullName'=>$userData['name'],
'email'=>$userData['email']
]);
        // return redirect('https://localhost:3000'); // 重新導向到前端應用
    }
    
    

    public function googleRegister($googleId, $fullName, $email){
         function generateRandomUsername($length = 8) {
            $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            $username = '';
            
            for ($i = 0; $i < $length; $i++) {
                $randomIndex = mt_rand(0, strlen($characters) - 1);
                $username .= $characters[$randomIndex];
            }
            
            return $username;
        }
        $quickRegisterResult=DB::select('select count(*) as result from users where google_id = ?',[$googleId]);
        if ($quickRegisterResult[0]->result>0) {
            $quickRegisterResult='register already';
            $setToken= DB::select('call set_token_google(?);',[$googleId]);
            $getFullName=DB::select('select full_name from users where google_id = ?',[$googleId]);
                    setcookie('token',$setToken[0]->token,time() + 3600,'/');
                    setcookie('fullName',$getFullName[0]->full_name,time() + 3600,'/');
                    setcookie('role','user',time() + 3600,'/');
                    return redirect('http://localhost:3000/memberCenter?register already');
        }else{
            $randomUsername = generateRandomUsername();
            date_default_timezone_set('Asia/Taipei');
            $registerTime = date("Y-m-d H:i:s");
                DB::select('insert into users(email,full_Name,google_id,register_time,user_name)
                VALUES (?, ?, ?, ? ,?);',
                [
                $email,
                $fullName,
                $googleId,
                $registerTime,
                $randomUsername]);
                $quickRegisterResult=DB::select('select count(*) as result from users where google_id = ?',[$googleId]);
                if ($quickRegisterResult[0]->result>0) {
                    $quickRegisterResult='resgister success';
                    $setToken= DB::select('call set_token_google(?);',[$googleId]);
                    $getFullName=DB::select('select full_name from users where google_id = ?',[$googleId]);
                    setcookie('token',$setToken[0]->token,time() + 3600,'/');
                    setcookie('fullName',$getFullName[0]->full_name,time() + 3600,'/');
                    setcookie('role','user',time() + 3600,'/');
                    return redirect('http://localhost:3000/memberCenter?resgister success');
                }
        }
        
            

    }
}

