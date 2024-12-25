<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\VillaTypesModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class VillaTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = VillaTypesModel::where('type_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Villa Types');
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
            'type_status' => 'villa type status',
            'created_by' => 'created by',
            'created_ip' => 'created ip',
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

        $storeData = new VillaTypesModel;
        $storeData->name                            = $request->name;
        $storeData->description                     = $request->description;
        $storeData->type_status                      = $request->type_status;
        $storeData->created_by                      = $request->created_by;
        $storeData->created_date                    = Carbon::now();
        $storeData->created_ip                      = $request->created_ip;
        

        if ($storeData->save()) {
            //echo json_encode(array("message" => "Villa type stored!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Villa type stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);

        } else {
            //echo json_encode(array("message" => "Villa type not stored!" ));
         
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
        $result = VillaTypesModel::where('type_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();
        //return $result;

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Villa type not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Villa type details');
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
            'type_status' => 'villa type status',
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
        $villaType = VillaTypesModel::find($id);

        if (!$villaType) {
            // Handle the case where the page with the given ID was not found
            //echo json_encode(array("message" => "Villa type not found!"));
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Villa type not found!');
            return response()->json($response, 200);
        }
        $villaType->name                            = $request->name;
        $villaType->description                     = $request->description;
        $villaType->type_status                      = $request->type_status;
        $villaType->updated_by                      = $request->updated_by;
        $villaType->updated_date                    = Carbon::now();
        $villaType->updated_ip                      = $request->updated_ip;
        

        if ($villaType->save()) {
            //echo json_encode(array("message" => "Villa type updated!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Villa type updated!');
            $response['data'] = $villaType;
            return response()->json($response, 200);

        } else {
            //echo json_encode(array("message" => "Villa type not updated!" ));
         
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
          // Delete the villa types 
       $villaType = VillaTypesModel::find($id);
       if (!$villaType) {
           // Handle the case where the page with the given ID was not found
           //echo json_encode(array("message" => "Villa type not found!"));
           //exit();

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Villa type not found!');
           return response()->json($response, 200);

       }


       if ($villaType->delete()) {
            //echo json_encode(array("message" => "Villa type deleted!" ));
     
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Villa type deleted!');
            return response()->json($response, 200);

        } else {
            //echo json_encode(array("message" => "Villa type not deleted!" ));
        
            //exit();
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
