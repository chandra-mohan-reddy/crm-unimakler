<?php

namespace App\Http\Controllers\Login;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Helpers\StatusCode;
use App\Models\Builder\BuilderModel;
use App\Models\User\UserModel;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class BuilderLogin extends Controller {

    public function checkBuilderLogin(Request $request) {
        $rules = [
            'username' => 'required|exists:re_accounts,username,role_id,4',
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
        $user = BuilderModel::where($arrWhere)->first();

        if (!$user) {
            return response()->json(['code' => 401, 'status' => 0, 'type' => 'Unauthorized', 'message' => 'Incorrect Username'], 401);
        }

        if (!$user || !Hash::check($request->password, $user->password)) {
            $retmsg = 'Incorrect Password.';
            $response = StatusCode::getStatusCodeData(422);
            $response['data']['password'][] = $retmsg;
            return response()->json($response, 422);
        }

        $accessToken = $user->createToken('Builder')->accessToken;
        $result['token'] = $accessToken;
        $result['data'] = $user;
        $response = StatusCode::getStatusCodeData(200, 'UN', 'Login');
        $response['data'] = $result;
        return response()->json($response, 200);
    }

    public function builderLogout() {
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
