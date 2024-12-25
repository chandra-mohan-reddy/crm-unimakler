<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\BuilderLocationsModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
class BuilderLocationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = BuilderLocationsModel::where('builder_location_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Builder locations');
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
            'builder_id'                    => 'required',
            'state'                         => 'required',
            'city'                          => 'required',
            'address'                       => 'required',
            'contact_person_name'           => 'required',
            'contact_person_phone_number'   => 'required',
            'builder_location_status'       => 'required',
            'created_by'                    => 'required',
            'created_ip'                    => 'required'
        ];

        $niceNames = [
            'builder_id' => 'builder id',
            'state' => 'state',
            'city' => 'city',
            'address' => 'address',
            'contact_person_name' => 'contact name',
            'contact_person_phone_number' => 'contact phone number',
            'builder_location_status' => 'status',
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

        $storeData = new BuilderLocationsModel;
        $storeData->builder_id                      = $request->builder_id;
        $storeData->state                           = $request->state;
        $storeData->city                            = $request->city;
        $storeData->address                         = $request->address;
        $storeData->contact_person_name             = $request->contact_person_name;
        $storeData->contact_person_phone_number     = $request->contact_person_phone_number;
        $storeData->builder_location_status         = $request->builder_location_status;
        $storeData->created_by                      = $request->created_by;
        $storeData->created_date                    = Carbon::now();
        $storeData->created_ip                      = $request->created_ip;
        

        if ($storeData->save()) {
            //echo json_encode(array("message" => "Builder location stored!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Builder location stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Builder location not stored!" ));
         
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
        $result = BuilderLocationsModel::where('builder_location_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();
        //return $result;

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Builder location not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Builder location details');
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
            'builder_id'                    => 'required',
            'state'                         => 'required',
            'city'                          => 'required',
            'address'                       => 'required',
            'contact_person_name'           => 'required',
            'contact_person_phone_number'   => 'required',
            'builder_location_status'       => 'required',
            'updated_by'                    => 'required',
            'updated_ip'                    => 'required'
        ];

        $niceNames = [
            'builder_id' => 'builder id',
            'state' => 'state',
            'city' => 'city',
            'address' => 'address',
            'contact_person_name' => 'contact name',
            'contact_person_phone_number' => 'contact phone number',
            'builder_location_status' => 'status',
            'updated_by' => 'updated by',
            'updated_ip' => 'updated ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
          // echo json_encode($validator->errors());
         
          //  exit();

          $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }

        // Find the record in the database by its ID
        $builderLocation = BuilderLocationsModel::find($id);

        if (!$builderLocation) {
            // Handle the case where the page with the given ID was not found
            //echo json_encode(array("message" => "builder location not found!"));
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Builder location not found!');
            return response()->json($response, 200);
        }


        $builderLocation->builder_id                      = $request->builder_id;
        $builderLocation->state                           = $request->state;
        $builderLocation->city                            = $request->city;
        $builderLocation->address                         = $request->address;
        $builderLocation->contact_person_name             = $request->contact_person_name;
        $builderLocation->contact_person_phone_number     = $request->contact_person_phone_number;
        $builderLocation->builder_location_status         = $request->builder_location_status;
        $builderLocation->updated_by                      = $request->updated_by;
        $builderLocation->updated_date                    = Carbon::now();
        $builderLocation->updated_ip                      = $request->updated_ip;
        

        if ($builderLocation->save()) {
           // echo json_encode(array("message" => "Builder location updated!" ));
         
           // exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Builder location updated!');
            $response['data'] = $builderLocation;
            return response()->json($response, 200);
        } else {
           // echo json_encode(array("message" => "Builder location not updated!" ));
         
           // exit();

           $response =  StatusCode::getStatusCodeData(500);
           return response()->json($response, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         // Delete the specified Builder Location
       $builderLocation =  BuilderLocationsModel::find($id);
       if (!$builderLocation) {
           // Handle the case where the page with the given ID was not found
           //echo json_encode(array("message" => "Builder location not found!"));
           //exit();

           
           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Builder location not found!');
           return response()->json($response, 200);
       }


       if ($builderLocation->delete()) {
            //echo json_encode(array("message" => "Builder location deleted!" ));
     
            //exit();
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Builder location deleted!');
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Builder location not deleted!" ));
        
            //exit();

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function showByBuilder(string $builderId)
    {
        $data = BuilderLocationsModel::where('builder_location_status', '=', 'A')->where('builder_id', '=', $builderId)->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Builder locations by builder id');
        $response['data'] = $data;
        return response()->json($response, 200);
    }
}
