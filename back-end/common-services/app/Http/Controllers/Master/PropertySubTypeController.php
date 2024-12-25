<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\PropertySubTypeModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
class PropertySubTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = PropertySubTypeModel::where('sub_type_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Property sub types');
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
            'property_type_id'          => 'required',
            'name'                      => 'required',
            'description'               => 'required',
            'sub_type_status'       => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];
        $niceNames = [
            'property_type_id' => 'property type id',
            'name' => 'name',
            'description' => 'description',
            'sub_type_status' => 'status',
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
        $storeData = new PropertySubTypeModel;
        $storeData->property_type_id            = $request->property_type_id;
        $storeData->name                        = $request->name;
        $storeData->description                 = $request->description;
        $storeData->sub_type_status             = $request->sub_type_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
            /* echo json_encode(array("message" => "Property sub type stored!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Property sub type stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Property sub Type not stored!" ));
         
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
        $result = PropertySubTypeModel::where('sub_type_status', '=', 'A')
        ->where('id', '=', $id)
        ->first();
        /* if (!$result) {             
            echo json_encode(array("message" => "Property sub type not found!"));
            exit();
        }else{
            return $result;
        } */

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property sub type not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Property sub type details');
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
            'property_type_id'          => 'required',
            'name'                      => 'required',
            'description'               => 'required',
            'sub_type_status'           => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'property_type_id' => 'property type id',
            'name' => 'name',
            'description' => 'description',
            'sub_type_status' => 'status',
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
         $propertySubType = PropertySubTypeModel::find($id);

         if (!$propertySubType) {
             
             /* echo json_encode(array("message" => "Property sub type not found!"));
             exit(); */

             $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property sub type not found!');
             return response()->json($response, 200);
         }


        $propertySubType->property_type_id            = $request->property_type_id;
        $propertySubType->name                        = $request->name;
        $propertySubType->description                 = $request->description;
        $propertySubType->sub_type_status             = $request->sub_type_status;
        $propertySubType->updated_by                  = $request->updated_by;
        $propertySubType->updated_date                = Carbon::now();
        $propertySubType->updated_ip                  = $request->updated_ip;
        

        if ($propertySubType->save()) {
            /* echo json_encode(array("message" => "Property sub type updated!" ));
         
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Property sub type updated!');
            $response['data'] = $propertySubType;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Property sub type not updated!" ));
         
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
        // Delete the specified Property sub Type 
       $propertySubType = PropertySubTypeModel::find($id);
       if (!$propertySubType) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "Property sub type not found!"));
           exit();  */   
           
           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property sub type not found!');
           return response()->json($response, 200);
        }

       if ($propertySubType->delete()) {
            /* echo json_encode(array("message" => "Property sub type deleted!" ));
     
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Property sub type deleted!');
            return response()->json($response, 200);
        } else {
           /*  echo json_encode(array("message" => "Property sub type not deleted!" ));
        
            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
