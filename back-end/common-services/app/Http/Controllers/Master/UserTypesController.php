<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\UserTypesModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class UserTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = UserTypesModel::where('user_type_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'User Types');
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
            'description'               => 'required',
            'user_type_status'          => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];
        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'user_type_status' => 'status',
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
        $storeData = new UserTypesModel;
        $storeData->name                        = $request->name;
        $storeData->description                 = $request->description;
        $storeData->user_type_status            = $request->user_type_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
            /* echo json_encode(array("message" => "User Type type stored!" ));
         
            exit(); */

            
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'User type stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "User Type not stored!" ));
         
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
        $result = UserTypesModel::where('user_type_status', '=', 'A')
        ->where('id', '=', $id)
        ->first();

        /* if (!$result) {             
            echo json_encode(array("message" => "User Type not found!"));
            exit();
        }else{
            return $result;
        } */

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'User type not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'User type details');
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
            'name'                      => 'required',
            'description'               => 'required',
            'user_type_status'          => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'user_type_status' => 'status',
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
         $userType = UserTypesModel::find($id);

         if (!$userType) {
             
             /* echo json_encode(array("message" => "User Type not found!"));
             exit(); */
             $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'User type not found!');
            return response()->json($response, 200);
         }


        $userType->name                        = $request->name;
        $userType->description                 = $request->description;
        $userType->user_type_status             = $request->user_type_status;
        $userType->updated_by                  = $request->updated_by;
        $userType->updated_date                = Carbon::now();
        $userType->updated_ip                  = $request->updated_ip;
        

        if ($userType->save()) {
            /* echo json_encode(array("message" => "User Type updated!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'User type updated!');
            $response['data'] = $userType;
            return response()->json($response, 200);
        } else {
           /*  echo json_encode(array("message" => "User Type not updated!" ));
         
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
        // Delete the specified User Type 
       $userType = UserTypesModel::find($id);
       if (!$userType) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "User Type not found!"));
           exit();  */   

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'User type not found!');
           return response()->json($response, 200);
           }


       if ($userType->delete()) {
            /* echo json_encode(array("message" => "User Type deleted!" ));
     
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'User type deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "User Type not deleted!" ));
        
            exit(); */

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
