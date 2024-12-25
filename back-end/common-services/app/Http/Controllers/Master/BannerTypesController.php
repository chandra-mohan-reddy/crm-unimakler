<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\BannerTypesModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class BannerTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = BannerTypesModel::where('type_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Banner types');
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
            'name'   => 'required',
            'description'  => 'required',
            'type_status'  => 'required',
            'created_by'   => 'required',
            'created_ip'   => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'type_status' => 'status',
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

        $storeData = new BannerTypesModel;
        $storeData->name                = $request->name;
        $storeData->description         = $request->description;
        $storeData->type_status         = $request->type_status;
        $storeData->created_by          = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;
        
        if ($storeData->save()) {

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Banner type stored!');
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
        $result = BannerTypesModel::where('type_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Banner type not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Banner type details');
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
            'name'                  => 'required',
            'description'           => 'required',
            'type_status'           => 'required',
            'updated_by'           => 'required',
            'updated_ip'           => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'type_status' => 'status',
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
        $bannerType= BannerTypesModel::find($id);

        if (!$bannerType) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Banner type not found!');
            return response()->json($response, 200);
        }
        $bannerType->name               = $request->name;
        $bannerType->description        = $request->description;
        $bannerType->type_status        = $request->type_status;
        $bannerType->updated_by         = $request->updated_by;
        $bannerType->updated_date       = Carbon::now();
        $bannerType->updated_ip         = $request->updated_ip;
        

        if ($bannerType->save()) {

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Banner type updated!');
            $response['data'] = $bannerType;
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
       $bannerType = BannerTypesModel::find($id);
       if (!$bannerType) {

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Banner type not found!');
           return response()->json($response, 200);

       }

       if ($bannerType->delete()) {

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Banner type deleted!');
            return response()->json($response, 200);

        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
