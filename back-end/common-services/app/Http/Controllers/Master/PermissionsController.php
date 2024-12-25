<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\PermissionsModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class PermissionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $data = PermissionsModel::where('permission_status', '=', 'A')->get();

        $data = PermissionsModel::select('users.name as created_name','master_modules.module as module_name','master_permissions.*')
                    ->join('users', 'master_permissions.created_by', '=', 'users.id')
                    ->join('master_modules', 'master_permissions.module', '=', 'master_modules.module_id')
                    ->where('permission_status', '=', 'A')
                    ->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Permissions');
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
            'name'           => 'required',
            'key'            => 'required',
            'module'         => 'required',
            'description'    => 'required',
            'status'         => 'required',

        ];
        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'status' => 'status',
            'created_by' => 'created by',
            'created_ip' => 'created ip',
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
        $userId = $request->input('userid');
        $storeData = new PermissionsModel;
        $storeData->name                        = $request->name;
        $storeData->key                         = $request->key;
        $storeData->module                      = $request->module;
        $storeData->description                 = $request->description;
        $storeData->permission_status           = $request->status;
        $storeData->created_by                  = $userId;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->ip();


        if ($storeData->save()) {
            // echo json_encode(array("message" => "Permissions stored!" ));

            // exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Permissions stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Permissions not stored!" ));

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
        $result = PermissionsModel::select('users.name as created_name','master_permissions.*')
                        ->join('users', 'master_permissions.created_by', '=', 'users.id')
                        ->where('id', '=', $id)
                        ->where('permission_status', '=', 'A')
                        ->first();

        /* if (!$result) {
            echo json_encode(array("message" => "Permissions not found!"));
            exit();
        }else{
            return $result;
        } */

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Permissions not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Permissions details');
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
            'permission_status'         => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'permission_status' => 'status',
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
         $permissions = PermissionsModel::find($id);

         if (!$permissions) {

             // echo json_encode(array("message" => "Permissions not found!"));
             // exit();

             $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Permissions not found!');
             return response()->json($response, 200);
         }


        $permissions->name                        = $request->name;
        $permissions->description                 = $request->description;
        $permissions->permission_status           = $request->permission_status;
        $permissions->updated_by                  = $request->updated_by;
        $permissions->updated_date                = Carbon::now();
        $permissions->updated_ip                  = $request->updated_ip;


        if ($permissions->save()) {
            /* echo json_encode(array("message" => "Permissions updated!" ));

            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Permissions updated!');
            $response['data'] = $permissions;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Permissions not updated!" ));

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
        // Delete the specified Permissions
       $permissions = PermissionsModel::find($id);
       if (!$permissions) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "Permissions not found!"));
           exit();   */

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Permissions not found!');
           return response()->json($response, 200);

        }


       if ($permissions->delete()) {
            /* echo json_encode(array("message" => "Permissions deleted!" ));

            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Permissions deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Permissions not deleted!" ));

            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
