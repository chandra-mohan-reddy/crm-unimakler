<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\PropertyFacingModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class PropertyFacingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = PropertyFacingModel::where('property_facing_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Property facing');
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
            'name'                      => 'required',
            'country_code'              => 'required',
            'description'               => 'required',
            'property_facing_status'    => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'country_code' => 'country',
            'description' => 'description',
            'property_facing_status' => 'project facing status',
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

        $storeData = new PropertyFacingModel;
        $storeData->name                        = $request->name;
        $storeData->country_code                = $request->country_code;
        $storeData->description                 = $request->description;
        $storeData->property_facing_status      = $request->property_facing_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
            /* echo json_encode(array("message" => "Property facing stored!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Property facing stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Property facing not stored!" ));
         
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
        $result = PropertyFacingModel::where('property_facing_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();
        // return $result;

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property facing not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Property facing details');
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
            'name'                      => 'required',
            'country_code'              => 'required',
            'description'               => 'required',
            'property_facing_status'    => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'country_code' => 'country',
            'description' => 'description',
            'property_facing_status' => 'project facing status',
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
        $propertyFacing = PropertyFacingModel::find($id);

        if (!$propertyFacing) {
            // Handle the case where the page with the given ID was not found
            /* echo json_encode(array("message" => "Property facing not found!"));
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property facing not found!');
            return response()->json($response, 200);
        }
        $propertyFacing->name                        = $request->name;
        $propertyFacing->country_code                = $request->country_code;
        $propertyFacing->description                 = $request->description;
        $propertyFacing->property_facing_status      = $request->property_facing_status;
        $propertyFacing->updated_by                  = $request->updated_by;
        $propertyFacing->updated_date                = Carbon::now();
        $propertyFacing->updated_ip                  = $request->updated_ip;
        

        if ($propertyFacing->save()) {
            /* echo json_encode(array("message" => "Property facing updated!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Property facing updated!');
            $response['data'] = $propertyFacing;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Property facing not updated!" ));
         
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
          // Delete the specified Property facing 
       $propertyFacing = PropertyFacingModel::find($id);
       if (!$propertyFacing) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "Property facing not found!"));
           exit(); */

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property facing not found!');
           return response()->json($response, 200);
       }


       if ($propertyFacing->delete()) {
            /* echo json_encode(array("message" => "Property facing deleted!" ));
     
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Property facing deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Property facing not deleted!" ));
        
            exit(); */

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}

