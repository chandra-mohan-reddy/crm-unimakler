<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\AmenitiesModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class AmenitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = AmenitiesModel::where('amenities_status', '=', 'A')->get();
        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Amenities');
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
            'amenities_header_id'      => 'required',
            'name'                      => 'required',
            'description'               => 'required',
            'amenities_status'          => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];
        $niceNames = [
            'amenities_header_id' => 'header id',
            'name' => 'name',
            'description' => 'description',
            'amenities_status' => 'status',
            'created_by' => 'created by',
            'created_ip' => 'created ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
           //echo json_encode($validator->errors());
         
            //exit();
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }
        $storeData = new AmenitiesModel;
        $storeData->amenities_header_id         = $request->amenities_header_id;
        $storeData->name                        = $request->name;
        $storeData->description                 = $request->description;
        $storeData->amenities_status            = $request->amenities_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
            //echo json_encode(array("message" => "Amenities info stored!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Amenities stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);

        } else {
            //echo json_encode(array("message" => "Amenities not stored!" ));
         
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
        $result = AmenitiesModel::where('amenities_status', '=', 'A')
        ->where('id', '=', $id)
        ->first();
       /*  if (!$result) {             
            echo json_encode(array("message" => "Amenities not found!"));
            exit();
        }else{
            return $result;
        } */

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Amenities not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Amenities details');
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
            'amenities_header_id'       => 'required',
            'name'                      => 'required',
            'description'               => 'required',
            'amenities_status'          => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'amenities_header_id' => 'header id',
            'name' => 'name',
            'description' => 'description',
            'amenities_status' => 'status',
            'updated_by' => 'updated by',
            'updated_ip' => 'updated ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
           //echo json_encode($validator->errors());
         
            //exit();

            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }

         // Find the record in the database by its ID
         $amenities = AmenitiesModel::find($id);

         if (!$amenities) {
             
             //echo json_encode(array("message" => "Amenities not found!"));
             //exit();

             $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Amenities not found!');
             return response()->json($response, 200);
         }


        $amenities->amenities_header_id         = $request->amenities_header_id;
        $amenities->name                        = $request->name;
        $amenities->description                 = $request->description;
        $amenities->amenities_status            = $request->amenities_status;
        $amenities->updated_by                  = Carbon::now();
        $amenities->updated_date                = $request->updated_date;
        $amenities->updated_ip                  = $request->updated_ip;
        

        if ($amenities->save()) {
            //echo json_encode(array("message" => "Amenities updated!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Amenities updated!');
            $response['data'] = $amenities;
            return response()->json($response, 200);

        } else {
            //echo json_encode(array("message" => "Amenities not updated!" ));
         
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
        // Delete the specified Amenities Type 
       $amenities = AmenitiesModel::find($id);
       if (!$amenities) {
           // Handle the case where the page with the given ID was not found
           //echo json_encode(array("message" => "Amenities not found!"));
           //exit();   
           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Amenities not found!');
           return response()->json($response, 200);    
        }

       if ($amenities->delete()) {
            //echo json_encode(array("message" => "Amenities deleted!" ));
     
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Amenities deleted!');
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Amenities header not deleted!" ));
        
            //exit();

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
