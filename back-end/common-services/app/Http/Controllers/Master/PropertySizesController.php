<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\PropertySizesModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class PropertySizesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = PropertySizesModel::where('property_size_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Property Sizes');
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
            'property_size_status'      => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'country_code' => 'country',
            'description' => 'description',
            'property_size_status' => 'project size status',
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

        $storeData = new PropertySizesModel;
        $storeData->name                        = $request->name;
        $storeData->country_code                = $request->country_code;
        $storeData->description                 = $request->description;
        $storeData->property_size_status        = $request->property_size_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
            /* echo json_encode(array("message" => "Property size stored!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Property size stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
           /*  echo json_encode(array("message" => "Property size not stored!" ));
         
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
        $result = PropertySizesModel::where('property_size_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();
        // return $result;

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property size not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Property size details');
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
            'property_size_status'      => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'country_code' => 'country',
            'description' => 'description',
            'property_size_status' => 'project size status',
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
        $propertySizes = PropertySizesModel::find($id);

        if (!$propertySizes) {
            // Handle the case where the page with the given ID was not found
            /* echo json_encode(array("message" => "Property size not found!"));
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property size not found!');
            return response()->json($response, 200);
        }
        $propertySizes->name                        = $request->name;
        $propertySizes->country_code                = $request->country_code;
        $propertySizes->description                 = $request->description;
        $propertySizes->property_size_status        = $request->property_size_status;
        $propertySizes->updated_by                  = $request->updated_by;
        $propertySizes->updated_date                = Carbon::now();
        $propertySizes->updated_ip                  = $request->updated_ip;
        

        if ($propertySizes->save()) {
            /* echo json_encode(array("message" => "Property size updated!" ));
         
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Property size updated!');
            $response['data'] = $propertySizes;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Property size not updated!" ));
         
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
       $propertySizes = PropertySizesModel::find($id);
       if (!$propertySizes) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "Property size not found!"));
           exit(); */

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Property size not found!');
           return response()->json($response, 200);
       }


       if ($propertySizes->delete()) {
            /* echo json_encode(array("message" => "Property size deleted!" ));
     
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Property size deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Property size not deleted!" ));
        
            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
