<?php

namespace App\Http\Middleware;

use Closure;
use App\Helpers\StatusCode;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Config;

class TokenValidationMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next){

        $authServiceURL = env('APP_AUTH_URL');
        //print_r("------------".$authServiceURL);
        $token = $request->header('Authorization');

        $response = Http::withHeaders(['Authorization' => $token])->post($authServiceURL.'/api/validate-token', [
            'token' => $token
        ]);
        // print_r($response);
        if ($response->json('code') == 200 && $response->json('status') == 1) {
            $request->merge(['user_data' => $response->json('data.user')]);
            $request->merge(['userid' => $response->json('data.user.id')]);
            return $next($request);
        } else {
            $response = StatusCode::getStatusCodeData(401, 'NotValid', 'Token is not valid Or expired');
            return response()->json($response, 200);
        }
    }
}
