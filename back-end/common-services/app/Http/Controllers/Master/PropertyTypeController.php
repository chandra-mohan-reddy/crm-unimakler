<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\PropertyTypeModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class PropertyTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = PropertyTypeModel::where('property_type_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Property Types');
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
            'country_code'              => 'required',
            'name'                      => 'required',
            'description'               => 'required',
            'property_type_status'       => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];
        $niceNames = [
            'country_code' => 'country code',
            'name' => 'name',
            'description' => 'description',
            'property_type_status' => 'status',
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
        $storeData = new PropertyTypeModel;
        $storeData->country_code                = $request->country_code;
        $storeData->name                        = $request->name;
        $storeData->description                 = $request->description;
        $storeData->property_type_status         = $request->property_type_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
            /* echo json_encode(array("message" => "Property type stored!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Property type stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Property Type not stored!" ));
         
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
        $result = PropertyTypeModel::where('property_type_status', '=', 'A')
        ->where('id', '=', $id)
        ->first();
        // return $result;

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property type not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Property type details');
            $response['data'] = $result;
            return response()->json($response, 200);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $rules = [
            'country_code'             => 'required',
            'name'                      => 'required',
            'description'               => 'required',
            'property_type_status'      => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'country_code' => 'country code',
            'name' => 'name',
            'description' => 'description',
            'property_type_status' => 'status',
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
         $propertyType = PropertyTypeModel::find($id);

         if (!$propertyType) {
             
             /* echo json_encode(array("message" => "Property type not found!"));
             exit(); */

             $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property type not found!');
             return response()->json($response, 200);
         }


        $propertyType->country_code                = $request->country_code;
        $propertyType->name                        = $request->name;
        $propertyType->description                 = $request->description;
        $propertyType->property_type_status        = $request->property_type_status;
        $propertyType->updated_by                  = $request->updated_by;
        $propertyType->updated_date                = Carbon::now();
        $propertyType->updated_ip                  = $request->updated_ip;
        

        if ($propertyType->save()) {
            /* echo json_encode(array("message" => "Property type updated!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Property type updated!');
            $response['data'] = $propertyType;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Property type not updated!" ));
         
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
        // Delete the specified Property Type 
       $propertyType = PropertyTypeModel::find($id);
       if (!$propertyType) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "Property type not found!"));
           exit();    */   
           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property type not found!');
           return response()->json($response, 200);
         }


       if ($propertyType->delete()) {
           /*  echo json_encode(array("message" => "Property type deleted!" ));
     
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Property type deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Property type not deleted!" ));
        
            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
