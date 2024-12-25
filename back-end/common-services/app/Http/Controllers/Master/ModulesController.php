<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\ModulesModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class ModulesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ModulesModel::get();

        $data = ModulesModel::select('master_modules.*', 'users.name as createdby')
                ->leftJoin('users', 'master_modules.created_by', '=', 'users.id')
                ->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Modules');
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
            'module'        => 'required|unique:master_modules,module',
            'status'        => 'required'
        ];
        $niceNames = [
            'module' => 'Module',
            'status' => 'Status'
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }

        $storeData = new ModulesModel;
        $storeData->module                = $request->module;
        $storeData->status                = $request->status;
        $storeData->created_by            = $request->input('userid');
        $storeData->created_date          = Carbon::now();
        $storeData->created_ip            = $request->ip();

        if ($storeData->save()) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Module stored!');
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
    public function show(string $code)
    {
        $result = StateModel::where('country_code', '=', $code)
        ->get();

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'State not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'State list');
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
    public function update(Request $request, string $code)
    {

        $rules = [
            'state_name'       => 'required|unique:master_states,state_name,' . $request->state_name . ',state_name',
            'state_code'       => 'required|unique:master_states,state_code,' . $request->state_code . ',state_code',
            'country_code'     => 'required|exists:master_country,country_code'
        ];
        $niceNames = [
            'state_name' => 'State Name',
            'state_code' => 'State Code',
            'country_code' => 'Country Code'
        ];

        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }

         // Find the record in the database by its ID
         $result = StateModel::where('state_code', '=', $code)->first();

         if (!$result) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'State not found!');
            return response()->json($response, 200);
         }


        $result->state_name               = $request->state_name;
        $result->state_code               = $request->state_code;
        $result->country_code             = $request->country_code;


        if ($result->save()) {
            $response =  StatusCode::getStatusCodeData(200, 'UPDATE', 'State updated!');
            $response['data'] = $result;
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $code)
    {
        // Delete the specified Role
       $result = StateModel::where('state_code', '=', $code)->first();
       if (!$result) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "Role not found!"));
           exit();     */

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'State not found!');
           return response()->json($response, 200);

        }


       if ($result->delete()) {
            /* echo json_encode(array("message" => "Role deleted!" ));

            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'State deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Role not deleted!" ));

            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
