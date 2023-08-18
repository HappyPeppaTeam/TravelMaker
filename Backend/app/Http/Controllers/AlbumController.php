<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
// use Validator;
use Illuminate\Support\Facades\Validator;

class AlbumController extends Controller
{
    public function createAlbum(Request $request, $token)
    {
        // 驗證輸入資料是否有效
        $validator = Validator::make($request->all(), [
            'album_name' => 'required|string|max:20',
            'tag' => 'required|string|max:20',
            'description' => 'required',
            'images' => 'required|array',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // 在這裡透過 Query Builder 查詢 users 資料表，並根據 token 取得對應的 user_id
        $user = DB::table('users')->where('token', $token)->first();

        // 確認是否找到對應的使用者
        if (!$user) {
            return response()->json(['error' => 'Invalid token'], 401);
        }

        // 取得對應的 user_id
        $user_id = $user->user_id;

        // 使用資料庫交易來確保操作的一致性
        DB::beginTransaction();

        try {
            // 新增相簿資訊到 albums 資料表
            $album_name = $request->input('album_name');
            $tag = $request->input('tag');
            $description = $request->input('description');

            $album_id = DB::table('albums')->insertGetId([
                'album_name' => $album_name,
                'tag' => $tag,
                'description' => $description,
                'user_id' => $user_id,
            ]);
            // 處理上傳的相片內容
            if ($request->has('images')) {
                // $photos = $request->input('photos');
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

            // 提交交易
            DB::commit();

            // 回傳 API 回應給前端
            return response()->json(['message' => 'Album and photos created successfully']);
        } catch (\Exception $e) {
            // 發生錯誤時進行回滾
            DB::rollBack();
            return response()->json(['error' => 'Failed to create album and photos'. $e->getMessage()], 500);
        }
    }

}



