<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\BHKSizesModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class BHKSizesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = BHKSizesModel::where('bhk_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'BHK Sizes');
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
            'bhk_status'                    => 'required',
            'created_by'                    => 'required',
            'created_ip'                    => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'bhk_status' => 'bhk status',
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

        $storeData = new BHKSizesModel;
        $storeData->name                            = $request->name;
        $storeData->description                     = $request->description;
        $storeData->bhk_status                      = $request->bhk_status;
        $storeData->created_by                      = $request->created_by;
        $storeData->created_date                    = Carbon::now();
        $storeData->created_ip                      = $request->created_ip;
        

        if ($storeData->save()) {
            //echo json_encode(array("message" => "BHK Size stored!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'BHK Size stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);

        } else {
            //echo json_encode(array("message" => "BHK Size not stored!" ));
         
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
        $result = BHKSizesModel::where('bhk_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();
        // return $result;

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'BHK size not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'BHK size details');
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
            'bhk_status'                        => 'required',
            'updated_by'                        => 'required',
            'updated_ip'                        => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'bhk_status' => 'bhk status',
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
        $bhkSizes = BHKSizesModel::find($id);

        if (!$bhkSizes) {
            // Handle the case where the page with the given ID was not found
            //echo json_encode(array("message" => "BHK Size not found!"));
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'BHK Size not found!');
            return response()->json($response, 200);
        }
        $bhkSizes->name                            = $request->name;
        $bhkSizes->description                     = $request->description;
        $bhkSizes->bhk_status                      = $request->bhk_status;
        $bhkSizes->updated_by                      = $request->updated_by;
        $bhkSizes->updated_date                    = Carbon::now();
        $bhkSizes->updated_ip                      = $request->updated_ip;
        

        if ($bhkSizes->save()) {
            //echo json_encode(array("message" => "BHK size updated!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'BHK size updated!');
            $response['data'] = $bhkSizes;
            return response()->json($response, 200);

        } else {
            //echo json_encode(array("message" => "BHK size not updated!" ));
         
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
          // Delete the BHK Sizes 
       $bhkSizes = BHKSizesModel::find($id);
       if (!$bhkSizes) {
           // Handle the case where the page with the given ID was not found
           //echo json_encode(array("message" => "BHK size not found!"));
           //exit();

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'BHK size not found!');
           return response()->json($response, 200);
       }


       if ($bhkSizes->delete()) {
            //echo json_encode(array("message" => "BHK size deleted!" ));
     
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'BHK size deleted!');
            return response()->json($response, 200);

        } else {
            //echo json_encode(array("message" => "BHK size not deleted!" ));
        
            //exit();
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
