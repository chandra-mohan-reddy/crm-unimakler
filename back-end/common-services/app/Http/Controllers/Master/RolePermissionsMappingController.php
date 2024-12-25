<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\RolePermissionsMappingModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class RolePermissionsMappingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = RolePermissionsMappingModel::where('role_permission_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Role permissions mapping');
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
            'role_id'                   => 'required',
            'permission_id'             => 'required',
            'role_permission_status'    => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];
        $niceNames = [
            'role_id' => 'role id',
            'permission_id' => 'permission id',
            'role_permission_status' => 'status',
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
        $storeData = new RolePermissionsMappingModel;
        $storeData->role_id                     = $request->role_id;
        $storeData->permission_id               = $request->permission_id;
        $storeData->role_permission_status      = $request->role_permission_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
            /* echo json_encode(array("message" => "Role Permissions Mapping stored!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Role Permissions Mapping stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Role Permissions Mapping not stored!" ));
         
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
        $result = RolePermissionsMappingModel::where('role_permission_status', '=', 'A')
        ->where('id', '=', $id)
        ->first();

        /* if (!$result) {             
            echo json_encode(array("message" => "Role Permissions Mapping not found!"));
            exit();
        }else{
            return $result;
        } */

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Role Permissions Mapping not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Role Permissions Mapping details');
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
            'role_id'                      => 'required',
            'permission_id'               => 'required',
            'role_permission_status'         => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'role_id' => 'role id',
            'permission_id' => 'permission id',
            'role_permission_status' => 'status',
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
         $rpm = RolePermissionsMappingModel::find($id);

         if (!$rpm) {
             
            /*  echo json_encode(array("message" => "Role Permissions Mapping not found!"));
             exit(); */

             $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Role Permissions Mapping not found!');
             return response()->json($response, 200);
         }


        $rpm->role_id                    = $request->role_id;
        $rpm->permission_id              = $request->permission_id;
        $rpm->role_permission_status     = $request->role_permission_status;
        $rpm->updated_by                 = $request->updated_by;
        $rpm->updated_date               = Carbon::now();
        $rpm->updated_ip                 = $request->updated_ip;
        

        if ($rpm->save()) {
            /* echo json_encode(array("message" => "Role Permissions Mapping updated!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Role Permissions Mapping updated!');
            $response['data'] = $rpm;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Role Permissions Mapping not updated!" ));
         
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
        // Delete the specified Role Permissions Mapping 
       $rpm = RolePermissionsMappingModel::find($id);
       if (!$rpm) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "Role Permissions Mapping not found!"));
           exit();   */  
           
           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Role Permissions Mapping not found!');
           return response()->json($response, 200);
         }


       if ($rpm->delete()) {
           /*  echo json_encode(array("message" => "Role Permissions Mapping deleted!" ));
     
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Role Permissions Mapping deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Role Permissions Mapping not deleted!" ));
        
            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
