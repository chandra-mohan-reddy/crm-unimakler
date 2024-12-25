<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\RolesModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = RolesModel::where('role_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Roles');
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
            'role_status'               => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];
        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'role_status' => 'status',
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
        $storeData = new RolesModel;
        $storeData->name                        = $request->name;
        $storeData->description                 = $request->description;
        $storeData->role_status                 = $request->role_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
           /*  echo json_encode(array("message" => "Role stored!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Role stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Role not stored!" ));
         
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
        $result = RolesModel::where('role_status', '=', 'A')
        ->where('id', '=', $id)
        ->first();

        /* if (!$result) {             
            echo json_encode(array("message" => "Role not found!"));
            exit();
        }else{
            return $result;
        } */

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Role not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Role details');
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
            'role_status'               => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'role_status' => 'status',
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
         $roles = RolesModel::find($id);

         if (!$roles) {
             
            /*  echo json_encode(array("message" => "Role not found!"));
             exit(); */

             
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Role not found!');
            return response()->json($response, 200);
         }


        $roles->name                        = $request->name;
        $roles->description                 = $request->description;
        $roles->role_status                 = $request->role_status;
        $roles->updated_by                  = $request->updated_by;
        $roles->updated_date                = Carbon::now();
        $roles->updated_ip                  = $request->updated_ip;
        

        if ($roles->save()) {
            /* echo json_encode(array("message" => "Role updated!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Role updated!');
            $response['data'] = $roles;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Role not updated!" ));
         
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
        // Delete the specified Role 
       $roles = RolesModel::find($id);
       if (!$roles) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "Role not found!"));
           exit();     */  

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Role not found!');
           return response()->json($response, 200);
        
        }


       if ($roles->delete()) {
            /* echo json_encode(array("message" => "Role deleted!" ));
     
            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Role deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Role not deleted!" ));
        
            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
