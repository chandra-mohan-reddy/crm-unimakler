<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\ListingSpecialFeaturesMappingModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
use Illuminate\Support\Facades\Hash;
use DB;

class ListingSpecialFeaturesMappingController extends Controller
{
    /**
    * Display a listing of the resource.
    */

    public function index() {
        $data = ListingSpecialFeaturesMappingModel::where( 'mapping_status', '=', 'A' )->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Special Features');
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
            'special_feature_id'     => 'required|integer',
            'created_by_type'       => 'required|integer',
            'mapping_status'        => 'required|htmltags|IN:A,I',
            'created_by'            => 'required|integer',
            'created_ip'            => 'required|htmltags'
        ];
        $niceNames = [
            'project_listing_id'    => 'project listing id',
            'special_feature_id'     => 'special feature id',
            'created_by_type'       => 'created by type',
            'mapping_status'        => 'status',
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
        $storeData = new ListingSpecialFeaturesMappingModel;
        $storeData->project_listing_id  = $request->project_listing_id;
        $storeData->special_feature_id   = $request->special_feature_id;
        $storeData->created_by_type     = $request->created_by_type;
        $storeData->mapping_status      = $request->mapping_status;
        $storeData->created_by          = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;

        if ( $storeData->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Listing Special Features are stored!');
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
        $result = ListingSpecialFeaturesMappingModel::where( 'mapping_status', '=', 'A' )
        ->where( 'id', '=', $id )
        ->first();

        if ( !$result ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing Special Features are not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Listing Special Features details');
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
            'special_feature_id'     => 'required|integer',
            'updated_by_type'       => 'required|integer',
            'mapping_status'        => 'required|htmltags|IN:A,I',
            'updated_by'            => 'required|integer',
            'updated_ip'            => 'required|htmltags'
        ];
        $niceNames = [
            'project_listing_id'    => 'project listing id',
            'special_feature_id'    => 'special feature id',
            'updated_by_type'       => 'updated by type',
            'mapping_status'        => 'status',
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
        $lsfm = ListingSpecialFeaturesMappingModel::find( $id );

        if ( !$lsfm ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing Special Features are not found!');
            return response()->json($response, 200);
        }

        $lsfm->project_listing_id   = $request->project_listing_id;
        $lsfm->special_feature_id   = $request->special_feature_id;
        $lsfm->updated_by_type      = $request->updated_by_type;
        $lsfm->mapping_status       = $request->mapping_status;
        $lsfm->updated_by           = $request->updated_by;
        $lsfm->updated_date         = Carbon::now();
        $lsfm->updated_ip           = $request->updated_ip;

        if ( $lsfm->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Listing Special Features are updated!');
            $response['data'] = $lsfm;
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
        // Delete the specified Listing Special Features
        $lsfm = ListingSpecialFeaturesMappingModel::find( $id );
        if ( !$lsfm ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing Special Features are not found!');
            return response()->json($response, 200);
        }

        if ( $lsfm->delete() ) {
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Listing Special Features are deleted!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
