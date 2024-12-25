<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\AmenitiesHeaderModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class AmenitiesHeaderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = AmenitiesHeaderModel::where('amenities_header_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Amenities headers');
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
            'amenities_header_status'   => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];
        $niceNames = [
            'country_code' => 'country code',
            'name' => 'name',
            'description' => 'description',
            'amenities_header_status' => 'status',
            'created_by' => 'created by',
            'created_ip' => 'created ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
           //echo json_encode($validator->errors());
         
           // exit();
           $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }
        $storeData = new AmenitiesHeaderModel;
        $storeData->country_code                = $request->country_code;
        $storeData->name                        = $request->name;
        $storeData->description                 = $request->description;
        $storeData->amenities_header_status     = $request->amenities_header_status;
        $storeData->created_by                  = Carbon::now();
        $storeData->created_date                = $request->created_date;
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
            //echo json_encode(array("message" => "Amenities header stored!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Amenities header stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);

        } else {
            //echo json_encode(array("message" => "Amenities header not stored!" ));
         
            //exit();
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $result = AmenitiesHeaderModel::where('amenities_header_status', '=', 'A')
        ->where('id', '=', $id)
        ->first();
       /*  if (!$result) {             
            echo json_encode(array("message" => "Amenities header not found!"));
            exit();
        }else{
            return $result;
        } */

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Amenities header not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Amenities header details');
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
            'amenities_header_status'   => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'country_code' => 'country code',
            'name' => 'name',
            'description' => 'description',
            'amenities_header_status' => 'status',
            'updated_by' => 'updated by',
            'updated_ip' => 'updated ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
          // echo json_encode($validator->errors());
         
           // exit();

           $response = StatusCode::getStatusCodeData(422);
           $response['data'] = $validator->errors();
           return response()->json($response, 422);
        }

         // Find the record in the database by its ID
         $amenitiesHeader = AmenitiesHeaderModel::find($id);

         if (!$amenitiesHeader) {
             
             //echo json_encode(array("message" => "Amenities header not found!"));
             //exit();

             $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Amenities header not found!');
            return response()->json($response, 200);
         }


        $amenitiesHeader->country_code                = $request->country_code;
        $amenitiesHeader->name                        = $request->name;
        $amenitiesHeader->description                 = $request->description;
        $amenitiesHeader->amenities_header_status     = $request->amenities_header_status;
        $amenitiesHeader->updated_by                  = $request->updated_by;
        $amenitiesHeader->updated_date                = Carbon::now();
        $amenitiesHeader->updated_ip                  = $request->updated_ip;
        

        if ($amenitiesHeader->save()) {
            //echo json_encode(array("message" => "Amenities header updated!" ));
         
            //exit();

            
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Amenities header updated!');
            $response['data'] = $amenitiesHeader;
            return response()->json($response, 200);

        } else {
            //echo json_encode(array("message" => "Amenities header not updated!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Delete the specified Amenities header Type 
       $amenitiesHeader = AmenitiesHeaderModel::find($id);
       if (!$amenitiesHeader) {
           // Handle the case where the page with the given ID was not found
           //echo json_encode(array("message" => "Amenities header not found!"));
           //exit();   
           
           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Amenities header not found!');
           return response()->json($response, 200);
        }

       if ($amenitiesHeader->delete()) {
            //echo json_encode(array("message" => "Amenities header deleted!" ));
     
            //exit();
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Amenities header deleted!');
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Amenities header not deleted!" ));
        
            // exit();
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
