<?php

namespace App\Http\Controllers;
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
            'image_data' => $album->image_data,
        ];
    }

    // 重新索引陣列，以移除原始的 album_id 作為索引
    $result = array_values($result);

    return response()->json(['data' => $result]);
});

Route::post('/albums/{token}', [AlbumController::class, 'createAlbum']);
