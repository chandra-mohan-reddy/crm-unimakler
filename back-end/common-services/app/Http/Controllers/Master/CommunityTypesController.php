<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\CommunityTypesModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
class CommunityTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = CommunityTypesModel::where('community_type_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Community types');
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
            'community_type_status'     => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];
        $niceNames = [
            'country_code' => 'country code',
            'name' => 'name',
            'description' => 'description',
            'community_type_status' => 'status',
            'created_by' => 'created by',
            'created_ip' => 'created ip',
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
        $storeData = new CommunityTypesModel;
        $storeData->country_code                = $request->country_code;
        $storeData->name                        = $request->name;
        $storeData->description                 = $request->description;
        $storeData->community_type_status       = $request->community_type_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
            // echo json_encode(array("message" => "Community Type stored!" ));
         
            // exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Community type stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Community Type not stored!" ));
         
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
        $result = CommunityTypesModel::where('community_type_status', '=', 'A')
        ->where('id', '=', $id)
        ->first();

        /* if (!$result) {             
            echo json_encode(array("message" => "Community type not found!"));
            exit();
        }else{
            return $result;
        } */

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Community type not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Community type details');
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
            'community_type_status'      => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'country_code' => 'country code',
            'name' => 'name',
            'description' => 'description',
            'community_type_status' => 'status',
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
         $communityTypes = CommunityTypesModel::find($id);

         if (!$communityTypes) {
             
             // echo json_encode(array("message" => "Community type not found!"));
             // exit();

             $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Community type not found!');
             return response()->json($response, 200);
         }


        $communityTypes->country_code                = $request->country_code;
        $communityTypes->name                        = $request->name;
        $communityTypes->description                 = $request->description;
        $communityTypes->community_type_status        = $request->community_type_status;
        $communityTypes->updated_by                  = $request->updated_by;
        $communityTypes->updated_date                = Carbon::now();
        $communityTypes->updated_ip                  = $request->updated_ip;
        

        if ($communityTypes->save()) {
           // echo json_encode(array("message" => "Community type updated!" ));
         
           // exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Community type updated!');
            $response['data'] = $communityTypes;
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Community type not updated!" ));
         
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
        // Delete the specified Community Type 
       $communityType = CommunityTypesModel::find($id);
       if (!$communityType) {
           // Handle the case where the page with the given ID was not found
           //echo json_encode(array("message" => "Community type not found!"));
           // exit();     
           
           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Community type not found!');
           return response()->json($response, 200);
        
        }


       if ($communityType->delete()) {
            //echo json_encode(array("message" => "Community type deleted!" ));
     
            // exit();

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Community type deleted!');
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Community type not deleted!" ));
        
            //exit();
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
