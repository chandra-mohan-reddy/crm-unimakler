<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\FarmHouseTypesModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class FarmHouseTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = FarmHouseTypesModel::where('type_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Farm house types');
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
            'name'                          => 'required',
            'description'                   => 'required',
            'type_status'                    => 'required',
            'created_by'                    => 'required',
            'created_ip'                    => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'type_status' => 'farm house type status',
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

        $storeData = new FarmHouseTypesModel;
        $storeData->name                            = $request->name;
        $storeData->description                     = $request->description;
        $storeData->type_status                      = $request->type_status;
        $storeData->created_by                      = $request->created_by;
        $storeData->created_date                    = Carbon::now();
        $storeData->created_ip                      = $request->created_ip;
        

        if ($storeData->save()) {
            //echo json_encode(array("message" => "Farm house type stored!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Farm house type stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Farm house type not stored!" ));
         
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
        $result = FarmHouseTypesModel::where('type_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();
        // return $result;

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Farm house type not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Farm house type details');
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
            'name'                              => 'required',
            'description'                       => 'required',
            'type_status'                        => 'required',
            'updated_by'                        => 'required',
            'updated_ip'                        => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'type_status' => 'farm house type status',
            'updated_by' => 'updated by',
            'updated_ip' => 'updated ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
           //echo json_encode($validator->errors());
         
            //exit();

            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }

        // Find the record in the database by its ID
        $farmHouseType = FarmHouseTypesModel::find($id);

        if (!$farmHouseType) {
            // Handle the case where the page with the given ID was not found
            //echo json_encode(array("message" => "Farm house type not found!"));
           // exit();

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Farm house type not found!');
            return response()->json($response, 200);

        }
        $farmHouseType->name                            = $request->name;
        $farmHouseType->description                     = $request->description;
        $farmHouseType->type_status                      = $request->type_status;
        $farmHouseType->updated_by                      = $request->updated_by;
        $farmHouseType->updated_date                    = Carbon::now();
        $farmHouseType->updated_ip                      = $request->updated_ip;
        

        if ($farmHouseType->save()) {
            //echo json_encode(array("message" => "Farm house type updated!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Farm house type updated!');
            $response['data'] = $farmHouseType;
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Farm house type not updated!" ));
         
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
          // Delete the Farm house types 
       $farmHouseType = FarmHouseTypesModel::find($id);
       if (!$farmHouseType) {
           // Handle the case where the page with the given ID was not found
           //echo json_encode(array("message" => "Farm house type not found!"));
           //exit();

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Farm house type not found!');
           return response()->json($response, 200);
       }


       if ($farmHouseType->delete()) {
            //echo json_encode(array("message" => "Farm house type deleted!" ));
     
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Farm house type deleted!');
            return response()->json($response, 200);

        } else {
            //echo json_encode(array("message" => "Farm house type not deleted!" ));
        
            //exit();

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}