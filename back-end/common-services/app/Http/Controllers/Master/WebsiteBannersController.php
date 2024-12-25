<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\WebsiteBannersModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class WebsiteBannersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = WebsiteBannersModel::where('banner_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Website Banners');
        $response['data'] = $data;
        return response()->json($response, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rules = [
            'project_listing_id'   => 'required',
            'banner_type_id'       => 'required',
            'banner_position'      => 'required',
            'banner_status'        => 'required',
            'created_by_type'      => 'required',
            'created_by'           => 'required',
            'created_ip'           => 'required'
        ];

        $niceNames = [
            'project_listing_id' => 'project listing id',
            'banner_type_id' => 'banner type id',
            'banner_position' => 'banner position',
            'banner_status' => 'status',
            'created_by_type' => 'created by type',
            'created_by' => 'created by',
            'created_ip' => 'created ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {

            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);

        }

        $storeData = new WebsiteBannersModel;
        $storeData->project_listing_id  = $request->project_listing_id;
        $storeData->banner_type_id      = $request->banner_type_id;
        $storeData->banner_position     = $request->banner_position;
        $storeData->banner_status       = $request->banner_status;
        $storeData->created_by_type     = $request->created_by_type;
        $storeData->created_by          = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;
        
        if ($storeData->save()) {

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Website Banner stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);

        } else {

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);

        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $result = WebsiteBannersModel::where('banner_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Website Banner not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Website Banner details');
            $response['data'] = $result;
            return response()->json($response, 200);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $rules = [
            'project_listing_id'   => 'required',
            'banner_type_id'       => 'required',
            'banner_position'      => 'required',
            'banner_status'        => 'required',
            'updated_by_type'      => 'required',
            'updated_by'           => 'required',
            'updated_ip'           => 'required'
        ];

        $niceNames = [
            'project_listing_id' => 'project listing id',
            'banner_type_id' => 'banner type id',
            'banner_position' => 'banner position',
            'banner_status' => 'status',
            'updated_by_type' => 'updated by type',
            'updated_by' => 'updated by',
            'updated_ip' => 'updated ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {

            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);

        }

        // Find the record in the database by its ID
        $bannerInfo = WebsiteBannersModel::find($id);

        if (!$bannerInfo) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Website Banner not found!');
            return response()->json($response, 200);
        }
        $bannerInfo->project_listing_id  = $request->project_listing_id;
        $bannerInfo->banner_type_id      = $request->banner_type_id;
        $bannerInfo->banner_position     = $request->banner_position;
        $bannerInfo->banner_status       = $request->banner_status;
        $bannerInfo->updated_by_type     = $request->updated_by_type;
        $bannerInfo->updated_by          = $request->updated_by;
        $bannerInfo->updated_date        = Carbon::now();
        $bannerInfo->updated_ip          = $request->updated_ip;
        

        if ($bannerInfo->save()) {

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Website Banner updated!');
            $response['data'] = $bannerInfo;
            return response()->json($response, 200);

        } else {

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
       $websiteBanner = WebsiteBannersModel::find($id);
       if (!$websiteBanner) {

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Website Banner not found!');
           return response()->json($response, 200);

       }

       if ($websiteBanner->delete()) {

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Website Banner deleted!');
            return response()->json($response, 200);

        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
