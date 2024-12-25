<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\PossessionStatusModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
class PossessionStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = PossessionStatusModel::where('possession_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Possession Status');
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
            'possession_status'         => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];
        $niceNames = [
            'country_code' => 'country code',
            'name' => 'name',
            'description' => 'description',
            'possession_status' => 'status',
            'created_by' => 'created by',
            'created_ip' => 'created ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
          /*  echo json_encode($validator->errors());
         
            exit(); */
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }
        $storeData = new PossessionStatusModel;
        $storeData->country_code                = $request->country_code;
        $storeData->name                        = $request->name;
        $storeData->description                 = $request->description;
        $storeData->possession_status           = $request->possession_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
            /* echo json_encode(array("message" => "Possession Status stored!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Possession Status stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Possession Status not stored!" ));
         
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
        $result = PossessionStatusModel::where('possession_status', '=', 'A')
        ->where('id', '=', $id)
        ->first();

        /* if (!$result) {             
            echo json_encode(array("message" => "Possession Status not found!"));
            exit();
        }else{
            return $result;
        } */

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Possession status not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Possession status details');
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
            'possession_status'         => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'country_code' => 'country code',
            'name' => 'name',
            'description' => 'description',
            'possession_status' => 'status',
            'updated_by' => 'updated by',
            'updated_ip' => 'updated ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
          /*  echo json_encode($validator->errors());
         
            exit(); */

            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }

         // Find the record in the database by its ID
         $possessions = PossessionStatusModel::find($id);

         if (!$possessions) {
             
             /* echo json_encode(array("message" => "Possession Status not found!"));
             exit(); */

             $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Possession Status not found!');
             return response()->json($response, 200);
         }


        $possessions->country_code                = $request->country_code;
        $possessions->name                        = $request->name;
        $possessions->description                 = $request->description;
        $possessions->possession_status           = $request->possession_status;
        $possessions->updated_by                  = $request->updated_by;
        $possessions->updated_date                = Carbon::now();
        $possessions->updated_ip                  = $request->updated_ip;
        

        if ($possessions->save()) {
            /* echo json_encode(array("message" => "Possession Status updated!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Possession status updated!');
            $response['data'] = $possessions;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Possession Status not updated!" ));
         
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
        // Delete the specified Possession Status 
       $possessions = PossessionStatusModel::find($id);
       if (!$possessions) {
           // Handle the case where the page with the given ID was not found
          /*  echo json_encode(array("message" => "Possession Status not found!"));
           exit();     */  

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Possession status not found!');
           return response()->json($response, 200);
        
        }


       if ($possessions->delete()) {
            /* echo json_encode(array("message" => "Possession Status deleted!" ));
     
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Possession status deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Possession Status not deleted!" ));
        
            exit(); */

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
