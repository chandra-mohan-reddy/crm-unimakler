<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\ListingAmenitiesMappingModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
use Illuminate\Support\Facades\Hash;
use DB;

class ListingAmenitiesMappingController extends Controller
{
    /**
    * Display a listing of the resource.
    */

    public function index() {
        $data = ListingAmenitiesMappingModel::where( 'mapping_status', '=', 'A' )->get();

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
            'project_listing_id'    => 'required|integer',
            'amenities_id'          => 'required|integer',
            'mapping_status'        => 'required|htmltags|IN:A,I',
            'created_by'            => 'required|integer',
            'created_ip'            => 'required|htmltags'
        ];
        $niceNames = [
            'project_listing_id'   => 'project listing id',
            'amenities_id'     => 'amenities id',
            'mapping_status' => 'status',
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
        $storeData = new ListingAmenitiesMappingModel;
        $storeData->project_listing_id  = $request->project_listing_id;
        $storeData->amenities_id        = $request->amenities_id;
        $storeData->mapping_status      = $request->mapping_status;
        $storeData->created_by          = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;

        if ( $storeData->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Listing Amenities Mappings are stored!');
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
        $result = ListingAmenitiesMappingModel::where( 'mapping_status', '=', 'A' )
        ->where( 'id', '=', $id )
        ->first();

        if ( !$result ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing Amenities Mappings are not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Registration  details');
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
            'amenities_id'          => 'required|integer',
            'mapping_status'        => 'required|htmltags|IN:A,I',
            'updated_by'            => 'required|integer',
            'updated_ip'            => 'required|htmltags'
        ];
        $niceNames = [
            'project_listing_id'   => 'project listing id',
            'amenities_id'     => 'amenities id',
            'mapping_status' => 'status',
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
        $lam = ListingAmenitiesMappingModel::find( $id );

        if ( !$lam ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing Amenities Mappings are not found!');
            return response()->json($response, 200);
        }

        $lam->project_listing_id   = $request->project_listing_id;
        $lam->amenities_id         = $request->amenities_id;
        $lam->mapping_status       = $request->mapping_status;
        $lam->updated_by           = $request->updated_by;
        $lam->updated_date         = Carbon::now();
        $lam->updated_ip           = $request->updated_ip;

        if ( $lam->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Listing Amenities Mappings are updated!');
            $response['data'] = $lam;
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
        // Delete the specified Listing Amenities Mappings
        $lam = ListingAmenitiesMappingModel::find( $id );
        if ( !$lam ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing Amenities Mappings are not found!');
            return response()->json($response, 200);
        }

        if ( $lam->delete() ) {
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Listing Amenities Mappings are deleted!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
