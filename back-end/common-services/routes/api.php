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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => 'token-validation'], function () {

    Route::apiResource('/cms', 'App\Http\Controllers\Master\CMSController');
    Route::apiResource('/builder', 'App\Http\Controllers\Master\BuilderController');
    Route::apiResource('/builderlocations', 'App\Http\Controllers\Master\BuilderLocationsController');
    Route::get('builderlocations/builder/{id}', 'App\Http\Controllers\Master\BuilderLocationsController@showByBuilder');
    Route::apiResource('/listingtype', 'App\Http\Controllers\Master\ListingTypeController');
    Route::apiResource('/propertytype', 'App\Http\Controllers\Master\PropertyTypeController');
    Route::apiResource('/propertysubtype', 'App\Http\Controllers\Master\PropertySubTypeController');
    Route::apiResource('/projectname', 'App\Http\Controllers\Master\ProjectNameController');
    Route::apiResource('/propertyfacing', 'App\Http\Controllers\Master\PropertyFacingController');
    Route::apiResource('/propertysizes', 'App\Http\Controllers\Master\PropertySizesController');
    Route::apiResource('/propertyudssizes', 'App\Http\Controllers\Master\PropertyUdsSizesController');
    Route::apiResource('/amenitiesheader', 'App\Http\Controllers\Master\AmenitiesHeaderController');
    Route::apiResource('/amenities', 'App\Http\Controllers\Master\AmenitiesController');
    Route::apiResource('/banks', 'App\Http\Controllers\Master\BanksController');
    Route::apiResource('/communityTypes', 'App\Http\Controllers\Master\CommunityTypesController');
    Route::apiResource('/galleryheaders', 'App\Http\Controllers\Master\GalleryHeadersController');
    Route::apiResource('/possessionstatus', 'App\Http\Controllers\Master\PossessionStatusController');
    Route::apiResource('/specialfeaturesheader', 'App\Http\Controllers\Master\SpecialFeaturesHeaderController');
    Route::apiResource('/specialfeatures', 'App\Http\Controllers\Master\SpecialFeaturesController');

    Route::apiResource('/bhksizes', 'App\Http\Controllers\Master\BHKSizesController');
    Route::apiResource('/farmhousetypes', 'App\Http\Controllers\Master\FarmHouseTypesController');
    Route::apiResource('/villatypes', 'App\Http\Controllers\Master\VillaTypesController');

    Route::apiResource('/usertypes', 'App\Http\Controllers\Master\UserTypesController');
    Route::apiResource('/roles', 'App\Http\Controllers\Master\RolesController');
    Route::apiResource('/permissions', 'App\Http\Controllers\Master\PermissionsController');
    Route::apiResource('/modules', 'App\Http\Controllers\Master\ModulesController');
    Route::apiResource('/role-permission-mapping', 'App\Http\Controllers\Master\RolePermissionsMappingController');

    Route::apiResource('/project-listing-approval-status', 'App\Http\Controllers\Master\ProjectListingApprovalStatusHistoryController');
    Route::apiResource('/approval-status', 'App\Http\Controllers\Master\ApprovalStatusController');
    Route::apiResource('/banner-types', 'App\Http\Controllers\Master\BannerTypesController');
    Route::apiResource('/website-banners', 'App\Http\Controllers\Master\WebsiteBannersController');
    Route::apiResource('/approval-authority', 'App\Http\Controllers\Master\ApprovalAuthorityController');
    Route::apiResource('/saleable-area-representation', 'App\Http\Controllers\Master\SaleableAreaController');

    Route::apiResource('/staff', 'App\Http\Controllers\UsersController'); //Users Or Employees

    Route::apiResource('/user-registration', 'App\Http\Controllers\RegistrationController'); //Website User

    Route::post('/awss3/upload-file', 'App\Http\Controllers\AwsS3\AwsS3Controller@uploadfile');
    Route::get('/awss3/get-file', 'App\Http\Controllers\AwsS3\AwsS3Controller@getFile');
    Route::delete('/awss3/remove-file', 'App\Http\Controllers\AwsS3\AwsS3Controller@removeFile');

    Route::apiResource('/country', 'App\Http\Controllers\Master\CountryController');
    Route::apiResource('/state', 'App\Http\Controllers\Master\StateController');
    Route::apiResource('/city', 'App\Http\Controllers\Master\CityController');
    Route::apiResource('/locality', 'App\Http\Controllers\Master\LocalityController');
});
