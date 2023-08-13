<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use Illuminate\Support\Str;
use App\Mail\ResetPasswordController;

class ForgotPasswordController extends Controller
{
    public function sendResetLink(Request $request)
    {
       
        $email = $request->input('email');
        // $data = $request->json()->all();
        // $email = $data['body']->email;
        // return var_dump($email);
        // $email = $request['email'];
        $user = DB::select('select user_id from users where email = ?',[$email]);
       
        // die();
        if (!$user) {
            return response()->json(['message' => '找不到該用戶的記錄'], 404);
        }

        // 生成重置令牌並存儲到 password_resets 資料表
        $token = Str::random(60);
        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => now(),
        ]);

        // 發送包含重置連結的電子郵件
        Mail::to($email)->send(new ResetPasswordMail($token));

        return response()->json(['message' => '重置連結已發送到您的電子郵件']);
    }
}

