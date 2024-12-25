<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\SpecialFeaturesHeaderModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class SpecialFeaturesHeaderController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = SpecialFeaturesHeaderModel::where('special_feature_header_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Special feature headers');
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
            'name'                          => 'required',
            'country_code'                  => 'required',
            'description'                   => 'required',
            'special_feature_header_status' => 'required',
            'created_by'                    => 'required',
            'created_ip'                    => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'country_code' => 'country',
            'description' => 'description',
            'special_feature_header_status' => 'special feature header status',
            'created_by' => 'created by',
            'created_ip' => 'created ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
           /* echo json_encode($validator->errors());
         
            exit(); */

            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }

        $storeData = new SpecialFeaturesHeaderModel;
        $storeData->name                            = $request->name;
        $storeData->country_code                    = $request->country_code;
        $storeData->description                     = $request->description;
        $storeData->special_feature_header_status   = $request->special_feature_header_status;
        $storeData->created_by                      = $request->created_by;
        $storeData->created_date                    = Carbon::now();
        $storeData->created_ip                      = $request->created_ip;
        

        if ($storeData->save()) {
            /* echo json_encode(array("message" => "Special feature header stored!" ));
         
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Special feature header stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
           /*  echo json_encode(array("message" => "Special feature header not stored!" ));
         
            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $result = SpecialFeaturesHeaderModel::where('special_feature_header_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();
        // return $result;

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Special feature header not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Special feature header details');
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
            'name'                              => 'required',
            'country_code'                      => 'required',
            'description'                       => 'required',
            'special_feature_header_status'     => 'required',
            'updated_by'                        => 'required',
            'updated_ip'                        => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'country_code' => 'country',
            'description' => 'description',
            'special_feature_header_status' => 'special feature header status',
            'updated_by' => 'updated by',
            'updated_ip' => 'updated ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
           /* echo json_encode($validator->errors());
         
            exit(); */

            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }

        // Find the record in the database by its ID
        $specialFeaturesHeader = SpecialFeaturesHeaderModel::find($id);

        if (!$specialFeaturesHeader) {
            // Handle the case where the page with the given ID was not found
            /* echo json_encode(array("message" => "Special feature header not found!"));
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Special feature header not found!');
            return response()->json($response, 200);
        }
        $specialFeaturesHeader->name                            = $request->name;
        $specialFeaturesHeader->country_code                    = $request->country_code;
        $specialFeaturesHeader->description                     = $request->description;
        $specialFeaturesHeader->special_feature_header_status   = $request->special_feature_header_status;
        $specialFeaturesHeader->updated_by                      = $request->updated_by;
        $specialFeaturesHeader->updated_date                    = Carbon::now();
        $specialFeaturesHeader->updated_ip                      = $request->updated_ip;
        

        if ($specialFeaturesHeader->save()) {
            /* echo json_encode(array("message" => "Special feature header updated!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Special feature header updated!');
            $response['data'] = $specialFeaturesHeader;
            return response()->json($response, 200);
        } else {
           /*  echo json_encode(array("message" => "Special feature header not updated!" ));
         
            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
          // Delete the specified Special feature header 
       $specialFeaturesHeader = SpecialFeaturesHeaderModel::find($id);
       if (!$specialFeaturesHeader) {
           // Handle the case where the page with the given ID was not found
          /*  echo json_encode(array("message" => "Special feature header not found!"));
           exit(); */

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Special feature header not found!');
           return response()->json($response, 200);
       }


       if ($specialFeaturesHeader->delete()) {
            /* echo json_encode(array("message" => "Special feature header deleted!" ));
     
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Special feature header deleted!');
            return response()->json($response, 200);
        } else {
           /*  echo json_encode(array("message" => "Special feature header not deleted!" ));
        
            exit(); */

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
