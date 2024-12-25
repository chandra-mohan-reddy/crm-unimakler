<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\ListingVideoLinksModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
use Illuminate\Support\Facades\Hash;
use DB;

class ListingVideoLinksController extends Controller
{
    /**
    * Display a listing of the resource.
    */

    public function index() {
        $data = ListingVideoLinksModel::where( 'video_status', '=', 'A' )->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Vidoes Data');
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
            'project_listing_id'    => 'required|integer',
            'video_url'             => 'required|htmltags',
            'video_type'            => 'required|htmltags',
            'created_by_type'       => 'required|integer',
            'video_status'          => 'required|htmltags|IN:A,I',
            'created_by'            => 'required|integer',
            'created_ip'            => 'required|htmltags'
        ];
        $niceNames = [
            'project_listing_id'    => 'project listing id',
            'video_url'             => 'video url',
            'video_type'            => 'video type',
            'created_by_type'       => 'created by type',
            'video_status'          => 'status',
            'created_by'            => 'created by',
            'created_ip'            => 'created ip',
        ];
        $validator = Validator::make( $request->all(), $rules );
        $validator->setAttributeNames( $niceNames );

        if ( $validator->fails() ) {
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
            exit();
        }
        $storeData = new ListingVideoLinksModel;
        $storeData->project_listing_id  = $request->project_listing_id;
        $storeData->video_url           = $request->video_url;
        $storeData->video_type          = $request->video_type;
        $storeData->created_by_type     = $request->created_by_type;
        $storeData->video_status        = $request->video_status;
        $storeData->created_by          = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;

        if ( $storeData->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Listing Video Links are stored!');
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
        $result = ListingVideoLinksModel::where( 'video_status', '=', 'A' )
        ->where( 'id', '=', $id )
        ->first();

        if ( !$result ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing Video Links are not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Listing Video Links details');
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
            'project_listing_id'    => 'required|integer',
            'video_url'             => 'required|htmltags',
            'video_type'            => 'required|htmltags',
            'updated_by_type'       => 'required|integer',
            'video_status'          => 'required|htmltags|IN:A,I',
            'updated_by'            => 'required|integer',
            'updated_ip'            => 'required|htmltags'
        ];
        $niceNames = [
            'project_listing_id'    => 'project listing id',
            'video_url'             => 'video url',
            'video_type'            => 'video type',
            'updated_by_type'       => 'updated by type',
            'video_status'          => 'status',
            'updated_by'            => 'updated by',
            'updated_ip'            => 'updated ip',
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
        $lvlm = ListingVideoLinksModel::find( $id );

        if ( !$lvlm ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing Video Links are not found!');
            return response()->json($response, 200);
        }

        $lvlm->project_listing_id   = $request->project_listing_id;
        $lvlm->video_url            = $request->video_url;
        $lvlm->video_type           = $request->video_type;
        $lvlm->updated_by_type      = $request->updated_by_type;
        $lvlm->video_status         = $request->video_status;
        $lvlm->updated_by           = $request->updated_by;
        $lvlm->updated_date         = Carbon::now();
        $lvlm->updated_ip           = $request->updated_ip;

        if ( $lvlm->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Listing Video Links are updated!');
            $response['data'] = $lvlm;
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
        // Delete the specified Listing Video Links
        $lsfm = ListingVideoLinksModel::find( $id );
        if ( !$lsfm ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing Video Links are not found!');
            return response()->json($response, 200);
        }

        if ( $lsfm->delete() ) {
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Listing Video Links are deleted!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
