<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\ApprovalStatusModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class ApprovalStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ApprovalStatusModel::where('approval_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Approval Status');
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
            'name'   => 'required',
            'description'  => 'required',
            'approval_status'  => 'required',
            'created_by'   => 'required',
            'created_ip'   => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'approval_status' => 'status',
            'created_by' => 'created by',
            'created_ip' => 'created ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {

            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);

        }

        $storeData = new ApprovalStatusModel;
        $storeData->name                = $request->name;
        $storeData->description         = $request->description;
        $storeData->approval_status     = $request->approval_status;
        $storeData->created_by          = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;
        
        if ($storeData->save()) {

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Approval Status stored!');
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
    public function show(string $id)
    {
        $result = ApprovalStatusModel::where('approval_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Approval Status not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Approval Status details');
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
            'name'                  => 'required',
            'description'           => 'required',
            'approval_status'           => 'required',
            'updated_by'           => 'required',
            'updated_ip'           => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'approval_status' => 'status',
            'updated_by' => 'updated by',
            'updated_ip' => 'updated ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {

            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);

        }

        // Find the record in the database by its ID
        $approvalStatus= ApprovalStatusModel::find($id);

        if (!$approvalStatus) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Approval Status not found!');
            return response()->json($response, 200);
        }
        $approvalStatus->name               = $request->name;
        $approvalStatus->description        = $request->description;
        $approvalStatus->approval_status    = $request->approval_status;
        $approvalStatus->updated_by         = $request->updated_by;
        $approvalStatus->updated_date       = Carbon::now();
        $approvalStatus->updated_ip         = $request->updated_ip;
        

        if ($approvalStatus->save()) {

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Approval Status updated!');
            $response['data'] = $approvalStatus;
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
       $approvalStatus = ApprovalStatusModel::find($id);
       if (!$approvalStatus) {

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Approval Status not found!');
           return response()->json($response, 200);

       }

       if ($approvalStatus->delete()) {

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Approval Status deleted!');
            return response()->json($response, 200);

        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
