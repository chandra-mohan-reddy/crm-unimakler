<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\ProjectNameModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class ProjectNameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ProjectNameModel::where('project_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Project name');
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
            'country_code'              => 'required',
            'state_code'                => 'required',
            'city_code'                 => 'required',
            'locality'                  => 'required',
            'builder_id'                => 'required',
            'position'                  => 'required',
            'mobile_number'             => 'required',
            'email'                     => 'required',
            'project_status'            => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'country_code' => 'country',
            'state_code' => 'state',
            'city_code' => 'city',
            'locality' => 'locality',
            'builder_id' => 'builder',
            'position' => 'position',
            'mobile_number' => 'mobile number',
            'email' => 'email',
            'project_status' => 'project status',
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

        $storeData = new ProjectNameModel;
        $storeData->name                        = $request->name;
        $storeData->country_code                = $request->country_code;
        $storeData->state_code                  = $request->state_code;
        $storeData->city_code                   = $request->city_code;
        $storeData->locality                    = $request->locality;
        $storeData->builder_id                  = $request->builder_id;
        $storeData->position                    = $request->position;
        $storeData->mobile_number               = $request->mobile_number;
        $storeData->email                       = $request->email;
        $storeData->project_status              = $request->project_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
            /* echo json_encode(array("message" => "Project name stored!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Project name stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);

        } else {
            /* echo json_encode(array("message" => "Project name not stored!" ));
         
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
        $result = ProjectNameModel::where('project_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();
        // return $result;
        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Project name not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Project name details');
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
            'name'                      => 'required',
            'country_code'              => 'required',
            'state_code'                => 'required',
            'city_code'                 => 'required',
            'locality'                  => 'required',
            'builder_id'                => 'required',
            'position'                  => 'required',
            'mobile_number'             => 'required',
            'email'                     => 'required',
            'project_status'            => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'country_code' => 'country',
            'state_code' => 'state',
            'city_code' => 'city',
            'locality' => 'locality',
            'builder_id' => 'builder',
            'position' => 'position',
            'mobile_number' => 'mobile number',
            'email' => 'email',
            'project_status' => 'project status',
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
        $projectName = ProjectNameModel::find($id);

        if (!$projectName) {
            // Handle the case where the page with the given ID was not found
            /* echo json_encode(array("message" => "Project name not found!"));
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Project name not found!');
            return response()->json($response, 200);
        }
        $projectName->name                        = $request->name;
        $projectName->country_code                = $request->country_code;
        $projectName->state_code                  = $request->state_code;
        $projectName->city_code                   = $request->city_code;
        $projectName->locality                    = $request->locality;
        $projectName->builder_id                  = $request->builder_id;
        $projectName->position                    = $request->position;
        $projectName->mobile_number               = $request->mobile_number;
        $projectName->email                       = $request->email;
        $projectName->project_status              = $request->project_status;
        $projectName->updated_by                  = $request->updated_by;
        $projectName->updated_date                = Carbon::now();
        $projectName->updated_ip                  = $request->updated_ip;
        

        if ($projectName->save()) {
            /* echo json_encode(array("message" => "Project name updated!" ));
         
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Project name updated!');
            $response['data'] = $projectName;
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Project name not updated!" ));
         
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
          // Delete the specified Project Name 
       $projectName = ProjectNameModel::find($id);
       if (!$projectName) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "Project name not found!"));
           exit(); */
           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Project name not found!');
           return response()->json($response, 200);
       }


       if ($projectName->delete()) {
            /* echo json_encode(array("message" => "Project name deleted!" ));
     
            exit(); */

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Project name deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Project name not deleted!" ));
        
            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
