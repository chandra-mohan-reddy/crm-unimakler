<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\PropertyUdsSizesModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class PropertyUdsSizesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = PropertyUdsSizesModel::where('property_uds_size_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Property Uds Sizes');
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
            'property_uds_size_status'  => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'country_code' => 'country',
            'description' => 'description',
            'property_uds_size_status' => 'project uds size status',
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

        $storeData = new PropertyUdsSizesModel;
        $storeData->name                        = $request->name;
        $storeData->country_code                = $request->country_code;
        $storeData->description                 = $request->description;
        $storeData->property_uds_size_status    = $request->property_uds_size_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
            /* echo json_encode(array("message" => "Property uds size stored!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Property uds size stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Property uds size not stored!" ));
         
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
        $result = PropertyUdsSizesModel::where('property_uds_size_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();
        //return $result;

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property uds size not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Property uds size details');
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
            'property_uds_size_status'  => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'country_code' => 'country',
            'description' => 'description',
            'property_uds_size_status' => 'project uds size status',
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
        $propertyUds = PropertyUdsSizesModel::find($id);

        if (!$propertyUds) {
            // Handle the case where the page with the given ID was not found
           /*  echo json_encode(array("message" => "Property uds size not found!"));
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property uds size not found!');
            return response()->json($response, 200);
        }
        $propertyUds->name                        = $request->name;
        $propertyUds->country_code                = $request->country_code;
        $propertyUds->description                 = $request->description;
        $propertyUds->property_uds_size_status    = $request->property_uds_size_status;
        $propertyUds->updated_by                  = $request->updated_by;
        $propertyUds->updated_date                = Carbon::now();
        $propertyUds->updated_ip                  = $request->updated_ip;
        

        if ($propertyUds->save()) {
            /* echo json_encode(array("message" => "Property uds size updated!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Property uds size updated!');
            $response['data'] = $propertyUds;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Property uds size not updated!" ));
         
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
          // Delete the specified Property size 
       $propertyFacing = PropertyUdsSizesModel::find($id);
       if (!$propertyFacing) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "Property uds size not found!"));
           exit(); */

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property uds size not found!');
           return response()->json($response, 200);
       }


       if ($propertyFacing->delete()) {
            /* echo json_encode(array("message" => "Property uds size deleted!" ));
     
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Property uds size deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Property uds size not deleted!" ));
        
            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
