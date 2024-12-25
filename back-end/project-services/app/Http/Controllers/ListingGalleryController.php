<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\ListingGalleryModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
use Illuminate\Support\Facades\Hash;
use DB;

class ListingGalleryController extends Controller
{
    /**
    * Display a listing of the resource.
    */

    public function index() {
        $data = ListingGalleryModel::where( 'gallery_status', '=', 'A' )->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Gallery');
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
            'gallery_header_id'     => 'required|integer',
            'file_path'             => 'required',
            'thumbnail_path'        => 'required|htmltags',
            'metadata'              => 'required|htmltags',
            'order'                 => 'required|integer',
            'created_by_type'       => 'required|integer',
            'gallery_status'        => 'required|htmltags|IN:A,I',
            'created_by'            => 'required|integer',
            'created_ip'            => 'required|htmltags'
        ];
        $niceNames = [
            'project_listing_id'    => 'project listing id',
            'gallery_header_id'     => 'gallery header id',
            'file_path'             => 'file path',
            'thumbnail_path'        => 'thumbnail path',
            'metadata'              => 'metadata',
            'order'                 => 'order',
            'created_by_type'       => 'created by type',
            'gallery_status'        => 'status',
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
        $storeData = new ListingGalleryModel;
        $storeData->project_listing_id  = $request->project_listing_id;
        $storeData->gallery_header_id   = $request->gallery_header_id;
        $storeData->file_path           = $request->file_path;
        $storeData->thumbnail_path      = $request->thumbnail_path;
        $storeData->metadata            = $request->metadata;
        $storeData->order               = $request->order;
        $storeData->created_by_type     = $request->created_by_type;
        $storeData->gallery_status      = $request->gallery_status;
        $storeData->created_by          = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;

        if ( $storeData->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Listing Gallery are stored!');
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
        $result = ListingGalleryModel::where( 'gallery_status', '=', 'A' )
        ->where( 'id', '=', $id )
        ->first();

        if ( !$result ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing Gallery are not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Listing Gallery details');
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
            'gallery_header_id'     => 'required|integer',
            'file_path'             => 'required',
            'thumbnail_path'        => 'required|htmltags',
            'metadata'              => 'required|htmltags',
            'order'                 => 'required|integer',
            'updated_by_type'       => 'required|integer',
            'gallery_status'        => 'required|htmltags|IN:A,I',
            'updated_by'            => 'required|integer',
            'updated_ip'            => 'required|htmltags'
        ];
        $niceNames = [
            'project_listing_id'    => 'project listing id',
            'gallery_header_id'     => 'gallery header id',
            'file_path'             => 'file path',
            'thumbnail_path'        => 'thumbnail path',
            'metadata'              => 'metadata',
            'order'                 => 'order',
            'updated_by_type'       => 'updated by type',
            'gallery_status'        => 'status',
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
        $lg = ListingGalleryModel::find( $id );

        if ( !$lg ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing Gallery are not found!');
            return response()->json($response, 200);
        }

        $lg->project_listing_id   = $request->project_listing_id;
        $lg->gallery_header_id    = $request->gallery_header_id;
        $lg->file_path            = $request->file_path;
        $lg->thumbnail_path       = $request->thumbnail_path;
        $lg->metadata             = $request->metadata;
        $lg->order                = $request->order;
        $lg->updated_by_type      = $request->updated_by_type;
        $lg->gallery_status       = $request->gallery_status;
        $lg->updated_by           = $request->updated_by;
        $lg->updated_date         = Carbon::now();
        $lg->updated_ip           = $request->updated_ip;

        if ( $lg->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Listing Gallery are updated!');
            $response['data'] = $lg;
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
        // Delete the specified Listing Gallery
        $lg = ListingGalleryModel::find( $id );
        if ( !$lg ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing Gallery are not found!');
            return response()->json($response, 200);
        }

        if ( $lg->delete() ) {
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Listing Gallery are deleted!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
