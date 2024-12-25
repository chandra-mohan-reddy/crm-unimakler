<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\UsersModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
use Illuminate\Support\Facades\Hash;
use DB;

class UsersController extends Controller
{
     /**
    * Display a listing of the resource.
    */

    public function index() {
        $data = UsersModel::where( 'user_status', '=', 'A' )->get();

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
            'role_id'               => 'required|integer',
            'first_name'            => 'required|htmltags',
            'last_name'             => 'required|htmltags',
            'email'                 => 'required|htmltags|unique:users,email,' . $request->id . ',id,user_status,A',
            'mobile'                => 'required|htmltags|unique:users,mobile,' . $request->id . ',id,user_status,A',
            'username'              => 'required|htmltags|unique:users,username,' . $request->id . ',id,user_status,A',
            'password'              => 'required|password_validator|one_uppercase|one_lowercase|one_digit|one_special_symbol',
            'country_code'          => 'required|htmltags',
            'state_code'            => 'required|htmltags',
            'city_code'             => 'required|htmltags',
            'address'               => 'required|htmltags',
            'user_status'           => 'required|htmltags|IN:A,I',
            'created_by'            => 'required|integer',
            'created_ip'            => 'required|htmltags'
        ];
        $niceNames = [
            'role_id'        => 'role id',
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
            'user_status'    => 'status',
            'created_by'     => 'created by',
            'created_ip'     => 'created ip',
        ];
        $validator = Validator::make( $request->all(), $rules );
        $validator->setAttributeNames( $niceNames );

        if ( $validator->fails() ) {
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
            exit();
        }
        $storeData = new UsersModel;
        $storeData->role_id             = $request->role_id;
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
        $storeData->user_status         = $request->user_status;
        $storeData->created_by          = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;

        if ( $storeData->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Employees  details are stored!');
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
        $result = UsersModel::where( 'user_status', '=', 'A' )
        ->where( 'id', '=', $id )
        ->first();
        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Employees details are not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Employees  details');
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
            'role_id'               => 'required|integer',
            'first_name'            => 'required|htmltags',
            'last_name'             => 'required|htmltags',
            'email'                 => 'required|htmltags|unique:users,email,' . $id . ',id,user_status,A',
            'mobile'                => 'required|htmltags|unique:users,mobile,' . $id . ',id,user_status,A',
            'username'              => 'required|htmltags|unique:users,username,' . $id . ',id,user_status,A',
            'password'              => 'required|password_validator|one_uppercase|one_lowercase|one_digit|one_special_symbol',
            'country_code'          => 'required|htmltags',
            'state_code'            => 'required|htmltags',
            'city_code'             => 'required|htmltags',
            'address'               => 'required|htmltags',
            'user_status'           => 'required|htmltags|IN:A,I',
            'updated_by'            => 'required|integer',
            'updated_ip'            => 'required'
        ];

        $niceNames = [
            'role_id'        => 'role id',
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
            'user_status'    => 'status',
            'updated_by'     => 'updated by',
            'updated_ip'     => 'updated ip',
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
        $emps = UsersModel::find( $id );

        if ( !$emps ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Employees details are not found!');
            return response()->json($response, 200);
        }

        $emps->role_id              = $request->role_id;
        $emps->first_name          = $request->first_name;
        $emps->last_name           = $request->last_name;
        $emps->email               = $request->email;
        $emps->mobile              = $request->mobile;
        //$registration->username            = $request->username;
        $emps->password            = Hash::make($request->password);
        $emps->country_code        = $request->country_code;
        $emps->state_code          = $request->state_code;
        $emps->city_code           = $request->city_code;
        $emps->address             = $request->address;
        $emps->user_status         = $request->user_status;
        $emps->updated_by          = $request->updated_by;
        $emps->updated_date        = Carbon::now();
        $emps->updated_ip          = $request->updated_ip;

        if ( $emps->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Employees details are updated!');
            $response['data'] = $emps;
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
        $emp = RegistrationModel::find( $id );
        if ( !$emp ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Employees details are not found!');
            return response()->json($response, 200);

        }

        if ( $emp->delete() ) {
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Employees details are deleted!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
