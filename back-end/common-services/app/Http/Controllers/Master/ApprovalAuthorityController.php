<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\ApprovalAuthorityModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class ApprovalAuthorityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ApprovalAuthorityModel::where('authority_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Approval Authority');
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
            'country_code'  => 'required',
            'state_code'  => 'required',
            'city_code'  => 'required',
            'description'  => 'required',
            'authority_status'  => 'required',
            'created_by'   => 'required',
            'created_ip'   => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'country_code' => 'country code',
            'state_code' => 'state code',
            'city_code' => 'city code',
            'description' => 'description',
            'authority_status' => 'status',
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

        $storeData = new ApprovalAuthorityModel;
        $storeData->name                = $request->name;
        $storeData->country_code        = $request->country_code;
        $storeData->state_code          = $request->state_code;
        $storeData->city_code           = $request->city_code;
        $storeData->description         = $request->description;
        $storeData->authority_status    = $request->authority_status;
        $storeData->created_by          = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;
        
        if ($storeData->save()) {

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Approval authority stored!');
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
        $result = ApprovalAuthorityModel::where('authority_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Approval authority not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Approval authority details');
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
            'country_code'          => 'required',
            'state_code'            => 'required',
            'city_code'             => 'required',
            'description'           => 'required',
            'authority_status'      => 'required',
            'updated_by'            => 'required',
            'updated_ip'            => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'country_code' => 'country code',
            'state_code' => 'state code',
            'city_code' => 'city code',
            'description' => 'description',
            'authority_status' => 'status',
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
        $approvalAuthority= ApprovalAuthorityModel::find($id);

        if (!$approvalAuthority) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Approval authority not found!');
            return response()->json($response, 200);
        }
        $approvalAuthority->name               = $request->name;
        $approvalAuthority->country_code       = $request->country_code;
        $approvalAuthority->state_code         = $request->state_code;
        $approvalAuthority->city_code          = $request->city_code;
        $approvalAuthority->description        = $request->description;
        $approvalAuthority->authority_status   = $request->authority_status;
        $approvalAuthority->updated_by         = $request->updated_by;
        $approvalAuthority->updated_date       = Carbon::now();
        $approvalAuthority->updated_ip         = $request->updated_ip;
        

        if ($approvalAuthority->save()) {

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Approval authority updated!');
            $response['data'] = $approvalAuthority;
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
        $approvalAuthority = ApprovalAuthorityModel::find($id);
       if (!$approvalAuthority) {

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Approval authority not found!');
           return response()->json($response, 200);

       }

       if ($approvalAuthority->delete()) {

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Approval authority deleted!');
            return response()->json($response, 200);

        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
