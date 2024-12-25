<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\SpecialFeaturesModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class SpecialFeaturesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = SpecialFeaturesModel::where('special_feature_status', '=', 'A')->get();
        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Special features');
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
            'description'                   => 'required',
            'special_feature_status'        => 'required',
            'special_features_header_id'    => 'required',
            'created_by'                    => 'required',
            'created_ip'                    => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'special_feature_status' => 'special feature status',
            'special_features_header_id' => 'special feature header',
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

        $storeData = new SpecialFeaturesModel;
        $storeData->name                            = $request->name;
        $storeData->description                     = $request->description;
        $storeData->special_feature_status          = $request->special_feature_status;
        $storeData->special_features_header_id      = $request->special_features_header_id;
        $storeData->created_by                      = $request->created_by;
        $storeData->created_date                    = Carbon::now();
        $storeData->created_ip                      = $request->created_ip;
        

        if ($storeData->save()) {
           /*  echo json_encode(array("message" => "Special feature stored!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Special feature stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Special feature not stored!" ));
         
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
        $result = SpecialFeaturesModel::where('special_feature_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();
        //return $result;

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Special feature not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Special feature details');
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
            'description'                       => 'required',
            'special_feature_status'            => 'required',
            'special_features_header_id'        => 'required',
            'updated_by'                        => 'required',
            'updated_ip'                        => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'special_feature_status' => 'special feature status',
            'special_features_header_id' => 'special feature header',
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
        $specialFeatures = SpecialFeaturesModel::find($id);

        if (!$specialFeatures) {
            // Handle the case where the page with the given ID was not found
            /* echo json_encode(array("message" => "Special feature not found!"));
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Special feature not found!');
            return response()->json($response, 200);
        }
        $specialFeatures->name                            = $request->name;
        $specialFeatures->description                     = $request->description;
        $specialFeatures->special_feature_status          = $request->special_feature_status;
        $specialFeatures->special_features_header_id       = $request->special_features_header_id;
        $specialFeatures->updated_by                      = $request->updated_by;
        $specialFeatures->updated_date                    = Carbon::now();
        $specialFeatures->updated_ip                      = $request->updated_ip;
        

        if ($specialFeatures->save()) {
            /* echo json_encode(array("message" => "Special feature updated!" ));
         
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Special feature updated!');
            $response['data'] = $specialFeatures;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Special feature not updated!" ));
         
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
          // Delete the specified Special feature 
       $specialFeatures = SpecialFeaturesModel::find($id);
       if (!$specialFeatures) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "Special feature not found!"));
           exit(); */
           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Special feature not found!');
           return response()->json($response, 200);
       }


       if ($specialFeatures->delete()) {
            /* echo json_encode(array("message" => "Special feature deleted!" ));
     
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Special feature deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Special feature not deleted!" ));
        
            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
