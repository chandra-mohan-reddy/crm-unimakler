<?php

namespace App\Http\Controllers\Login;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Helpers\StatusCode;
use Validator;
use App\Models\User\UserModel;
use Illuminate\Support\Facades\Hash;

class UserLogin extends Controller
{
    public function checkUserLogin(Request $request) {
        $rules = [
            'username' => 'required|exists:builder_users,UserName,DeletedStatus,N',
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
            'UserName' => $request->username,
        ];
        $user = UserModel::where($arrWhere)->first();

        if (!$user) {
            return response()->json(['code' => 401, 'status' => 0, 'type' => 'Unauthorized', 'message' => 'Incorrect Username'], 401);
        }

        if (!$user || !Hash::check($request->password, $user->Password)) {
            $retmsg = 'Incorrect Password.';
            $response = StatusCode::getStatusCodeData(422);
            $response['data']['password'][] = $retmsg;
            return response()->json($response, 422);
        }

        $user->id = $user->UserId;
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
}
