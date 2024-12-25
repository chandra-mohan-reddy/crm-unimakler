<?php

namespace App\Http\Middleware;

use Closure;
use App\Helpers\StatusCode;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;

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
        //print_r($response->json('code'));print_r($response->json('code'));
        Log::info('Entering middleware. Log of API URL: ' . $authServiceURL.'/api/validate-token');
        Log::info('Entering middleware. Log of API Call: ' . $response);
        if ($response->json('code') == 200 && $response->json('status') == 1) {
            return $next($request);
        } else {
            $response = StatusCode::getStatusCodeData(401, 'NotValid', 'Token is not valid Or expired');
            return response()->json($response, 200);
        }
    }
}
