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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/
Route::group(['middleware' => 'token-validation'], function () {

    Route::apiResource('/project/listing-amenities-mappings', 'App\Http\Controllers\ListingAmenitiesMappingController');
    Route::apiResource('/project/listing-bank-mappings', 'App\Http\Controllers\ListingBanksMappingController');
    Route::apiResource('/project/listing-gallery', 'App\Http\Controllers\ListingGalleryController');
    Route::apiResource('/project/listing-special-features-mapping', 'App\Http\Controllers\ListingSpecialFeaturesMappingController');
    Route::apiResource('/project/listing-video-links', 'App\Http\Controllers\ListingVideoLinksController');
    Route::apiResource('/project/listing-data', 'App\Http\Controllers\ProjectListingsController');
    Route::apiResource('/project/listing-units', 'App\Http\Controllers\ProjectListingUnitsController');

});
