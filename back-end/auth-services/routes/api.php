<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\BuilderMiddleware;
use App\Http\Middleware\AgentMiddleware;
use Illuminate\Routing\Middleware\ThrottleRequests;

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

Route::get('unauth', function () {
    return response()->json([
        'code'    => 401,
        'status'  => 0,
        'type'    => 'Unauthorized',
        'message' => 'You are Unauthorized, Please Login'
    ], 401);
})->name('unauth');

Route::post('/userlogin', 'App\Http\Controllers\UserLogin@checkUserLogin'); 

Route::middleware(['auth:api'])->group(function () {
    Route::get('/userlogout', 'App\Http\Controllers\UserLogin@userLogout');
    Route::get('/userinfo/{id}', 'App\Http\Controllers\UserLogin@userInfo');
    Route::post('/validate-token', 'App\Http\Controllers\UserLogin@validateToken');
});