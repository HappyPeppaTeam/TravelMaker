<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/album/get/{token}', function ($token) {
    // 定義輸出參數
    $userId = null;

    // 執行 stored procedure，將輸入參數和輸出參數傳遞給 DB::select() 方法
    DB::select('CALL GetUserIdByToken(?, @userId)', [$token]);

    // 從 MySQL 讀取輸出參數的值
    $userId = DB::select('SELECT @userId AS user_id')[0]->user_id;

    if (!$userId) {
        // 如果找不到對應的使用者，回傳錯誤或其他處理方式
        return response()->json(['error' => 'Token not found'], 404);
    }

    // 使用取得的 user_id 執行查詢
    $results = DB::select('CALL GetAlbumsAndPhotos(?)', [$userId]);

    return response()->json($results);
});