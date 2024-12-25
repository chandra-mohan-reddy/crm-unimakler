<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\ProjectListingApprovalStatusHistoryModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class ProjectListingApprovalStatusHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ProjectListingApprovalStatusHistoryModel::where('record_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Project Listing Approval Status Historys');
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
            'project_listing_id'   => 'required',
            'approval_status_id'   => 'required',
            'record_status'        => 'required',
            'created_by_type'      => 'required',
            'created_by'           => 'required',
            'created_ip'           => 'required'
        ];

        $niceNames = [
            'project_listing_id' => 'project listing id',
            'approval_status_id' => 'approval status id',
            'record_status' => 'status',
            'created_by_type' => 'created by type',
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

        $storeData = new ProjectListingApprovalStatusHistoryModel;
        $storeData->project_listing_id  = $request->project_listing_id;
        $storeData->approval_status_id  = $request->approval_status_id;
        $storeData->record_status       = $request->record_status;
        $storeData->created_by_type     = $request->created_by_type;
        $storeData->created_by          = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;
        
        if ($storeData->save()) {

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Project Listing Approval Status History stored!');
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
        $result = ProjectListingApprovalStatusHistoryModel::where('record_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Project Listing Approval Status History not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Project Listing Approval Status History details');
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
            'project_listing_id'   => 'required',
            'approval_status_id'   => 'required',
            'record_status'        => 'required',
            'updated_by_type'      => 'required',
            'updated_by'           => 'required',
            'updated_ip'           => 'required'
        ];

        $niceNames = [
            'project_listing_id' => 'project listing id',
            'approval_status_id' => 'approval status id',
            'record_status' => 'status',
            'updated_by_type' => 'updated by type',
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
        $prjApprovalStatus = ProjectListingApprovalStatusHistoryModel::find($id);

        if (!$prjApprovalStatus) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Project Listing Approval Status History not found!');
            return response()->json($prjApprovalStatus, 200);
        }
        $prjApprovalStatus->project_listing_id  = $request->project_listing_id;
        $prjApprovalStatus->approval_status_id  = $request->approval_status_id;
        $prjApprovalStatus->record_status       = $request->record_status;
        $prjApprovalStatus->updated_by_type     = $request->updated_by_type;
        $prjApprovalStatus->updated_by          = $request->updated_by;
        $prjApprovalStatus->updated_date        = Carbon::now();
        $prjApprovalStatus->updated_ip          = $request->updated_ip;
        

        if ($prjApprovalStatus->save()) {

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Project Listing Approval Status History updated!');
            $response['data'] = $prjApprovalStatus;
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
       $prjApprovalStatus = ProjectListingApprovalStatusHistoryModel::find($id);
       if (!$prjApprovalStatus) {

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Project Listing Approval Status History not found!');
           return response()->json($response, 200);

       }

       if ($prjApprovalStatus->delete()) {

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Project Listing Approval Status History deleted!');
            return response()->json($response, 200);

        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
