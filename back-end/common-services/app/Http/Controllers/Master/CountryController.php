<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\CountryModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = CountryModel::get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Country');
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
            'country_name'        => 'required|unique:master_country,country_name',
            'country_code'        => 'required|unique:master_country,country_code',
            'phone_code'          => 'required|unique:master_country,phone_code'
        ];
        $niceNames = [
            'country_name' => 'Country Name',
            'country_code' => 'Country Code',
            'phone_code' => 'Phone Code'
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }
        $storeData = new CountryModel;
        $storeData->country_name                = $request->country_name;
        $storeData->country_code                = $request->country_code;
        $storeData->phone_code                  = $request->phone_code;

        if ($storeData->save()) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Country stored!');
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
        $result = CountryModel::where('country_code', '=', $code)
        ->first();

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Country not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Country details');
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
            'country_name'        => 'required|unique:master_country,country_name,' . $request->country_name . ',country_name',
            'country_code'        => 'required|unique:master_country,country_code,' . $request->country_code . ',country_code',
            'phone_code'          => 'required'
        ];
        $niceNames = [
            'country_name' => 'Country Name',
            'country_code' => 'Country Code',
            'phone_code' => 'Phone Code'
        ];

        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }

         // Find the record in the database by its ID
         $result = CountryModel::where('country_code', '=', $code)->first();

         if (!$result) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Country not found!');
            return response()->json($response, 200);
         }


         $result->country_name                = $request->country_name;
         $result->country_code                = $request->country_code;
         $result->phone_code                  = $request->phone_code;


        if ($result->save()) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Country updated!');
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
       $result = CountryModel::where('country_code', '=', $code)->first();
       if (!$result) {
           // Handle the case where the page with the given ID was not found
           /* echo json_encode(array("message" => "Role not found!"));
           exit();     */

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Country not found!');
           return response()->json($response, 200);

        }


       if ($result->delete()) {
            /* echo json_encode(array("message" => "Role deleted!" ));

            exit(); */
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Country deleted!');
            return response()->json($response, 200);
        } else {
            /* echo json_encode(array("message" => "Role not deleted!" ));

            exit(); */
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
