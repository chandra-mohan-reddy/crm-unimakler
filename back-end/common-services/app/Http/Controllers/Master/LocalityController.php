<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\LocalityModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class LocalityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = LocalityModel::get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Locality');
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
            'locality_name'        => 'required|unique:master_locality,locality_name',
            'city_code'            => 'required|unique:master_cities,city_code',
            'country_code'         => 'required|exists:master_country,country_code',
            'state_code'           => 'required|exists:master_states,state_code'
        ];
        $niceNames = [
            'locality_name' => 'Locality Name',
            'city_code' => 'City Code',
            'country_code' => 'Country Code',
            'state_code' => 'State Code'
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }
        $storeData = new LocalityModel;
        $storeData->locality_name            = $request->locality_name;
        $storeData->city_code                = $request->city_code;
        $storeData->country_code             = $request->country_code;
        $storeData->state_code               = $request->state_code;

        if ($storeData->save()) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Locality stored!');
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
        $result = LocalityModel::where('city_code', '=', $code)
        ->get();

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Locality not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Locality details');
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
            'locality_name'    => 'required|unique:master_locality,locality_name,' . $request->locality_name . ',locality_name',
            'city_code'        => 'required|unique:master_cities,city_code,' . $request->city_code . ',city_code',
            'country_code'     => 'required|exists:master_country,country_code',
            'state_code'       => 'required|exists:master_states,state_code'
        ];
        $niceNames = [
            'locality_name' => 'Locality Name',
            'city_code' => 'City Code',
            'country_code' => 'Country Code',
            'state_code' => 'State Code'
        ];

        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }

         // Find the record in the database by its ID
         $result = LocalityModel::where('id', '=', $id)->first();

         if (!$result) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Locality not found!');
            return response()->json($response, 200);
         }


        $result->locality_name            = $request->locality_name;
        $result->city_code                = $request->city_code;
        $result->country_code             = $request->country_code;
        $result->state_code               = $request->state_code;


        if ($result->save()) {
            $response =  StatusCode::getStatusCodeData(200, 'UPDATE', 'Locality updated!');
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
    public function destroy(string $id)
    {
        // Delete the specified Role
       $result = LocalityModel::where('id', '=', $id)->first();
       if (!$result) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "Role not found!"));
           exit();     */

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Locality not found!');
           return response()->json($response, 200);

        }


       if ($result->delete()) {
            /* echo json_encode(array("message" => "Role deleted!" ));

            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Locality deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Role not deleted!" ));

            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
