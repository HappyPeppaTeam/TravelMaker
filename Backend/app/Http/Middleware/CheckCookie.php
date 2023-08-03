<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

class CheckCookie
{
    public function handle($request, Closure $next)
    {
        // 檢查是否存在名為 "your_cookie_name" 的 cookie
        if ($request->hasCookie('token')) {
            // 如果存在 cookie，可以在這裡執行你的相應處理
            // 例如：
            $requestToken=$request->cookie('token');
            $checkToken= DB::select('select count(*) from users where token = ?;',[$request->cookie('token')]);
            // return response($request->cookie();
            // return response($requestToken);
            return $next($request);
            // return $request->hasCookie('token');
        } else {
            // 如果 cookie 不存在，可以在這裡執行相應處理
            // 例如：
            return response('Cookie not found');
        }

        return $next($request);
    }
}
