<?php
// app/Http/Controllers/ImageController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImageController extends Controller
{
    public function upload(Request $request)
    {
        $token=$request['token'];
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = $image->store('images', 'public'); // 將圖片儲存在storage/app/public/images資料夾中
            // DB::select('update users set head_photo = ? where token = ?'.['testpath',$token]);
            DB::update('update users set head_photo = ? where token = ?', [$path, $token]);

            return response()->json(['message' => '圖片上傳成功', 'path' => $path]);
        }

        return response()->json(['message' => '未收到圖片'], 400);
        // return response()->json($request,200);
    }
}

