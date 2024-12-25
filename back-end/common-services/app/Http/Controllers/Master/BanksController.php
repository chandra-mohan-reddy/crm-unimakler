<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\BanksModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class BanksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = BanksModel::where('bank_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Banks');
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
            'country_code'      => 'required',
            'name'              => 'required',
            'description'       => 'required',
            'public'            => 'required',
            'logo_path'         => 'required',
            'bank_status'       => 'required',
            'created_by'        => 'required',
            'created_ip'        => 'required'
        ];
        $niceNames = [
            'country_code' => 'country code',
            'name' => 'name',
            'description' => 'description',
            'public' => 'public',
            'logo_path' => 'logo path',
            'bank_status' => 'status',
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
        $storeData = new BanksModel;
        $storeData->country_code         = $request->country_code;
        $storeData->name                 = $request->name;
        $storeData->description          = $request->description;
        $storeData->public               = $request->public;
        $storeData->logo_path            = $request->logo_path;
        $storeData->bank_status          = $request->bank_status;
        $storeData->created_by           = $request->created_by;
        $storeData->created_date         = Carbon::now();
        $storeData->created_ip           = $request->created_ip;
        

        if ($storeData->save()) {
            //echo json_encode(array("message" => "Bank info stored!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Bank stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
           // echo json_encode(array("message" => "Bank not stored!" ));
         
           // exit();

           $response =  StatusCode::getStatusCodeData(500);
           return response()->json($response, 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $result = BanksModel::where('bank_status', '=', 'A')
        ->where('id', '=', $id)
        ->first();
        /* if (!$result) {             
            echo json_encode(array("message" => "Bank not found!"));
            exit();
        }else{
            return $result;
        } */

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Bank not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Bank details');
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
            'country_code'              => 'required',
            'name'                      => 'required',
            'description'               => 'required',
            'public'                    => 'required',
            'logo_path'                 => 'required',
            'bank_status'               => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'country_code' => 'country code',
            'name' => 'name',
            'description' => 'description',
            'public' => 'public',
            'logo_path' => 'logo path',
            'bank_status' => 'status',
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
         $banks = BanksModel::find($id);

         if (!$banks) {
             
             //echo json_encode(array("message" => "Bank not found!"));
             // exit();

             $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Bank not found!');
            return response()->json($response, 200);
         }


        $banks->country_code                = $request->country_code;
        $banks->name                        = $request->name;
        $banks->description                 = $request->description;
        $banks->public                      = $request->public;
        $banks->logo_path                   = $request->logo_path;
        $banks->bank_status                 = $request->bank_status;
        $banks->updated_by                  = $request->updated_by;
        $banks->updated_date                = Carbon::now();
        $banks->updated_ip                  = $request->updated_ip;
        

        if ($banks->save()) {
            //echo json_encode(array("message" => "Bank updated!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Bank updated!');
            $response['data'] = $banks;
            return response()->json($response, 200);
        } else {
           // echo json_encode(array("message" => "Bank not updated!" ));
         
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
        // Delete the specified Amenities Type 
       $banks = BanksModel::find($id);
       if (!$banks) {
           // Handle the case where the page with the given ID was not found
           //echo json_encode(array("message" => "Bank not found!"));
           //exit();    
           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Bank not found!');
           return response()->json($response, 200);   
        }

       if ($banks->delete()) {
            //echo json_encode(array("message" => "Bank deleted!" ));
     
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Banke deleted!');
            return response()->json($response, 200);
        } else {
            echo json_encode(array("message" => "Bank not deleted!" ));
        
            exit();
        }
    }
}