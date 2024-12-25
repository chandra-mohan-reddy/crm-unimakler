<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\RegistrationModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
use Illuminate\Support\Facades\Hash;
use DB;

class RegistrationController extends Controller {

    /**
    * Display a listing of the resource.
    */

    public function index() {
        $data = RegistrationModel::where( 'user_status', '=', 'A' )->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Users');
        $response['data'] = $data;
        return response()->json($response, 200);
    }

    /**
    * Show the form for creating a new resource.
    */

    public function create() {
        //
    }

    /**
    * Store a newly created resource in storage.
    */

    public function store( Request $request ) {
        $rules = [
            'user_type_id'          => 'required|integer',
            'first_name'            => 'required|htmltags',
            'last_name'             => 'required|htmltags',
            'email'                 => 'required|htmltags|unique:registration,email,' . $request->id . ',id,registration_status,A',
            'mobile'                => 'required|htmltags|unique:registration,mobile,' . $request->id . ',id,registration_status,A',
            'username'              => 'required|htmltags|unique:registration,username,' . $request->id . ',id,registration_status,A',
            'password'              => 'required|password_validator|one_uppercase|one_lowercase|one_digit|one_special_symbol',
            'country_code'          => 'required|htmltags',
            'state_code'            => 'required|htmltags',
            'city_code'             => 'required|htmltags',
            'address'               => 'required|htmltags',
            'company_name'          => 'required|htmltags',
            'gst_number'            => 'required|htmltags',
            'registration_status'   => 'required|htmltags|IN:A,I',
            'created_by'            => 'required|integer',
            'created_ip'            => 'required|htmltags'
        ];
        $niceNames = [
            'user_type_id'   => 'user type id',
            'first_name'     => 'first name',
            'last_name'      => 'last name',
            'email'          => 'email',
            'mobile'         => 'mobile',
            'username'       => 'username',
            'password'       => 'password',
            'country_code'   => 'country code',
            'state_code'     => 'state code',
            'city_code'      => 'city code',
            'address'        => 'address',
            'company_name'   => 'company name',
            'gst_number'     => 'required',
            'registration_status' => 'status',
            'created_by' => 'created by',
            'created_ip' => 'created ip',
        ];
        $validator = Validator::make( $request->all(), $rules );
        $validator->setAttributeNames( $niceNames );

        if ( $validator->fails() ) {
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
            exit();
        }
        $storeData = new RegistrationModel;
        $storeData->user_type_id        = $request->user_type_id;
        $storeData->first_name          = $request->first_name;
        $storeData->last_name           = $request->last_name;
        $storeData->email               = $request->email;
        $storeData->mobile              = $request->mobile;
        $storeData->username            = $request->username;
        $storeData->password            = Hash::make($request->password);
        $storeData->country_code        = $request->country_code;
        $storeData->state_code          = $request->state_code;
        $storeData->city_code           = $request->city_code;
        $storeData->address             = $request->address;
        $storeData->company_name        = $request->company_name;
        $storeData->gst_number          = $request->gst_number;
        $storeData->registration_status = $request->registration_status;
        $storeData->created_by          = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;

        if ( $storeData->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Registration details are stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
    * Display the specified resource.
    */

    public function show( string $id ) {
        $result = RegistrationModel::where( 'user_status', '=', 'A' )
        ->where( 'user_type_id', '=', $id )
        ->get();

        if ( !$result ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Users list');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Users details');
            $response['data'] = $result;
            return response()->json($response, 200);
        }
    }

    /**
    * Show the form for editing the specified resource.
    */

    public function edit( string $id ) {

    }

    /**
    * Update the specified resource in storage.
    */

    public function update( Request $request, string $id ) {
        $rules = [
            'user_type_id'          => 'required|integer',
            'first_name'            => 'required|htmltags',
            'last_name'             => 'required|htmltags',
            'email'                 => 'required|htmltags|unique:registration,email,' . $id . ',id,registration_status,A',
            'mobile'                => 'required|htmltags|unique:registration,mobile,' . $id . ',id,registration_status,A',
            'username'              => 'required|htmltags|unique:registration,username,' . $id . ',id,registration_status,A',
            'password'              => 'required|password_validator|one_uppercase|one_lowercase|one_digit|one_special_symbol',
            'country_code'          => 'required|htmltags',
            'state_code'            => 'required|htmltags',
            'city_code'             => 'required|htmltags',
            'address'               => 'required|htmltags',
            'company_name'          => 'required|htmltags',
            'gst_number'            => 'required|htmltags',
            'registration_status'   => 'required|htmltags|IN:A,I',
            'updated_by'            => 'required|integer',
            'updated_ip'            => 'required'
        ];

        $niceNames = [
            'user_type_id'   => 'user type id',
            'first_name'     => 'first name',
            'last_name'      => 'last name',
            'email'          => 'email',
            'mobile'         => 'mobile',
            'password'       => 'password',
            'country_code'   => 'country code',
            'state_code'     => 'state code',
            'city_code'      => 'city code',
            'address'        => 'address',
            'company_name'   => 'company name',
            'gst_number'     => 'required',
            'registration_status' => 'status',
            'updated_by' => 'updated by',
            'updated_ip' => 'updated ip',
        ];
        $validator = Validator::make( $request->all(), $rules );
        $validator->setAttributeNames( $niceNames );

        if ( $validator->fails() ) {
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
            exit();
        }

        // Find the record in the database by its ID
        $registration = RegistrationModel::find( $id );

        if ( !$registration ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Registration details are not found!');
            return response()->json($response, 200);
        }

        $registration->user_type_id        = $request->user_type_id;
        $registration->first_name          = $request->first_name;
        $registration->last_name           = $request->last_name;
        $registration->email               = $request->email;
        $registration->mobile              = $request->mobile;
        //$registration->username            = $request->username;
        $registration->password            = Hash::make($request->password);
        $registration->country_code        = $request->country_code;
        $registration->state_code          = $request->state_code;
        $registration->city_code           = $request->city_code;
        $registration->address             = $request->address;
        $registration->company_name        = $request->company_name;
        $registration->gst_number          = $request->gst_number;
        $registration->registration_status = $request->registration_status;
        $registration->updated_by           = $request->updated_by;
        $registration->updated_date         = Carbon::now();
        $registration->updated_ip           = $request->updated_ip;

        if ( $registration->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Registration details are updated!');
            $response['data'] = $registration;
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
    * Remove the specified resource from storage.
    */

    public function destroy( string $id ) {
        // Delete the specified Registration Type
        $registration = RegistrationModel::find( $id );
        if ( !$registration ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Registration details are not found!');
            return response()->json($response, 200);
        }

        if ( $registration->delete() ) {
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Registration details are deleted!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
