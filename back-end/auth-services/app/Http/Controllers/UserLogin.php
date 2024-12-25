<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Helpers\StatusCode;
use Validator;
use App\Models\UserModel;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\RefreshToken;
use Laravel\Passport\Token;

class UserLogin extends Controller
{
    public function checkUserLogin(Request $request) {
        $rules = [
            'username' => 'required|exists:users,username,user_status,A',
            'password' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
            exit();
        }

        $arrWhere = [
            'username' => $request->username,
        ];
        $user = UserModel::where($arrWhere)->first();

        if (!$user) {
            return response()->json(['code' => 401, 'status' => 0, 'type' => 'Unauthorized', 'message' => 'Incorrect Username'], 401);
        }

        if (!$user || !Hash::check($request->password, $user->password)) {
            $retmsg = 'Incorrect Password.';
            $response = StatusCode::getStatusCodeData(422);
            $response['data']['password'][] = $retmsg;
            return response()->json($response, 422);
        }

        $user->id = $user->id;
        $accessToken = $user->createToken('User')->accessToken;
        $result['token'] = $accessToken;
        $result['data'] = $user;
        $response = StatusCode::getStatusCodeData(200, 'UN', 'Login');
        $response['data'] = $result;
        return response()->json($response, 200);
    }

    public function userLogout() {
        if (isset(auth()->user()->id)) {
            $user = auth()->user()->token();
            $user->revoke();
            $response = StatusCode::getStatusCodeData(200, 'LGT', 'Logout');
            return response()->json($response, 200);
        } else {
            $response = StatusCode::getStatusCodeData(401, 'DF', 'Logout');
            return response()->json($response, 200);
        }
    }

    public function validateToken(Request $request){
        if (Auth::check()) {
            $user = Auth::user();

            $response = StatusCode::getStatusCodeData(200, 'Valid', 'Token is valid');
            $response['data']['user'] = $user;

            return response()->json($response, 200);
        } else {
            $response = StatusCode::getStatusCodeData(401, 'NotValid', 'Token is not valid');
            return response()->json($response, 200);
        }
    }

    public function userInfo(string $id) {
        $result = UserModel::where( 'user_status', '=', 'A' )
        ->where( 'id', '=', $id )
        ->first();
        if ( !$result ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'User details are not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'User details');
            $response['data'] = $result;
            return response()->json($response, 200);
        }
    }
}
