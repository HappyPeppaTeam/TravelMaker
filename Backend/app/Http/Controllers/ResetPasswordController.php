<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ResetPasswordController extends Controller
{
    public function resetPassword(Request $request)
    {
        // 接收前端傳來的令牌和密碼
        $token = $request->input('token');
        $password = $request->input('password');
        // return $request;
        // 在 tokens 資料表中查找令牌
        $tokenRecord = DB::table('password_resets')->where('token', $token)->first();

        if (!$tokenRecord) {
            return response()->json(['message' => '無效的重置令牌'], 404);
        }

        // 檢查令牌是否過期
        if (strtotime($tokenRecord->created_at) < strtotime('-1 hour')) {
            return response()->json(['message' => '重置令牌已過期'], 400);
        }

        // 更新用戶密碼

        // 更新用戶密碼（使用 DB::select）
        $userEmail = $tokenRecord->email;
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
        DB::select("UPDATE users SET password = ? WHERE email = ?", [$hashedPassword, $userEmail]);

        // 刪除 tokens 資料表中的令牌
        DB::table('password_resets')->where('token', $token)->delete();

        return response()->json(['message' => '密碼已重置']);
    }
}

