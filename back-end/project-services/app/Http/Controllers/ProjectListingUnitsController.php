<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\ProjectListingUnitsModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
use Illuminate\Support\Facades\Hash;
use DB;

class ProjectListingUnitsController extends Controller
{
    /**
    * Display a listing of the resource.
    */

    public function index() {
        $data = ProjectListingUnitsModel::where( 'unit_status', '=', 'A' )->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Project Listing Units Data');
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
            'project_listing_id'=> 'required|integer',
            'villa_type_id'=> 'integer', 
            'farm_house_type_id'=> 'integer',
            'property_facing_id'=> 'integer',
            'property_bhk_size_id'=> 'integer',
            'super_built_up_area'=> 'htmltags',
            'carpet_area'=> 'htmltags',
            'floor_level'=> 'htmltags',
            'car_parkings'=> 'integer',
            'balconies'=> 'integer',
            'bathrooms'=> 'integer',
            'uds'=> 'required|htmltags',
            'property_uds_size_id'=> 'required|integer',
            'plot_size'=> 'htmltags',
            'property_size_id'=> 'required|integer',
            'length'=> 'required|htmltags',
            'width'=> 'required|htmltags',
            'dimension_representation'=> 'required|htmltags',
            'north_facing_road_width_in_fts'=> 'htmltags',
            'currency'=> 'required|htmltags',
            'base_price'=> 'required|htmltags',
            'total_base_price'=> 'required|htmltags',
            'amenities_charges'=> 'required|htmltags',
            'car_parking_charges'=> 'htmltags',
            'club_house_charges'=> 'htmltags',
            'corpus_fund'=> 'htmltags',
            'advance_maintenance_charges'=> 'htmltags',
            'advance_maintenance_for_months'=> 'integer',
            'legal_charges'=> 'htmltags',
            'others_1_charges_name'=> 'htmltags',
            'others_1_charges'=> 'htmltags',
            'others_2_charges_name'=> 'htmltags',
            'others_2_charges'=> 'htmltags',
            'others_3_charges_name'=> 'htmltags',
            'others_3_charges'=> 'htmltags',
            'estimated_total_price'=> 'required|htmltags',
            'gst_charges'=> 'htmltags',
            'registration_charges'=> 'htmltags',
            'floor_plan_path'=> 'required|htmltags',
            'thumbnail_path'=> 'htmltags',
            'metadata'=> 'htmltags',
            'order'=> 'integer',
            'unit_status'=> 'required|htmltags|IN:A,I',
            'created_by_type'=> 'required|integer',
            'created_by' => 'required|integer',
            'created_ip' => 'required|htmltags'
        ];
        $niceNames = [
            'project_listing_id'=> 'project listing id',
            'villa_type_id'=> 'villa type id', 
            'farm_house_type_id'=> 'farm house type id',
            'property_facing_id'=> 'property facing id',
            'property_bhk_size_id'=> 'property bhk size id',
            'super_built_up_area'=> 'super built up area',
            'carpet_area'=> 'carpet area',
            'floor_level'=> 'floor level',
            'car_parkings'=> 'car parkings',
            'balconies'=> 'balconies',
            'bathrooms'=> 'bathrooms',
            'uds'=> 'uds',
            'property_uds_size_id'=> 'property uds size id',
            'plot_size'=> 'plot size',
            'property_size_id'=> 'property size id',
            'length'=> 'length',
            'width'=> 'width',
            'dimension_representation'=> 'dimension representation',
            'north_facing_road_width_in_fts'=> 'north facing road width in fts',
            'currency'=> 'currency',
            'base_price'=> 'base price',
            'total_base_price'=> 'total base price',
            'amenities_charges'=> 'amenities charges',
            'car_parking_charges'=> 'car parking charges',
            'club_house_charges'=> 'club house charges',
            'corpus_fund'=> 'corpus fund',
            'advance_maintenance_charges'=> 'advance maintenance charges',
            'advance_maintenance_for_months'=> 'advance maintenance for months',
            'legal_charges'=> 'legal charges',
            'others_1_charges_name'=> 'others_1 charges name',
            'others_1_charges'=> 'others_1 charges',
            'others_2_charges_name'=> 'others_2 charges name',
            'others_2_charges'=> 'others_2 charges',
            'others_3_charges_name'=> 'others_3 charges name',
            'others_3_charges'=> 'others_3 charges',
            'estimated_total_price'=> 'estimated total price',
            'gst_charges'=> 'gst charges',
            'registration_charges'=> 'registration charges',
            'floor_plan_path'=> 'floor plan path',
            'thumbnail_path'=> 'thumbnail path',
            'metadata'=> 'metadata',
            'order'=> 'order',
            'created_by_type'=> 'created by type',
            'unit_status' => 'status',
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
        $storeData = new ProjectListingUnitsModel;
        $storeData->project_listing_id = $request->project_listing_id;
        $storeData->villa_type_id = $request->villa_type_id; 
        $storeData->farm_house_type_id = $request->farm_house_type_id;
        $storeData->property_facing_id = $request->property_facing_id;
        $storeData->property_bhk_size_id = $request->property_bhk_size_id;
        $storeData->super_built_up_area = $request->super_built_up_area;
        $storeData->carpet_area = $request->carpet_area;
        $storeData->floor_level = $request->floor_level;
        $storeData->car_parkings = $request->car_parkings;
        $storeData->balconies = $request->balconies;
        $storeData->bathrooms = $request->bathrooms;
        $storeData->uds = $request->uds;
        $storeData->property_uds_size_id = $request->property_uds_size_id;
        $storeData->plot_size = $request->plot_size;
        $storeData->property_size_id = $request->property_size_id;
        $storeData->length = $request->length;
        $storeData->width = $request->width;
        $storeData->dimension_representation = $request->dimension_representation;
        $storeData->north_facing_road_width_in_fts = $request->north_facing_road_width_in_fts;
        $storeData->currency = $request->currency;
        $storeData->base_price = $request->base_price;
        $storeData->total_base_price = $request->total_base_price;
        $storeData->amenities_charges = $request->amenities_charges;
        $storeData->car_parking_charges = $request->car_parking_charges;
        $storeData->club_house_charges = $request->club_house_charges;
        $storeData->corpus_fund = $request->corpus_fund;
        $storeData->advance_maintenance_charges = $request->advance_maintenance_charges;
        $storeData->advance_maintenance_for_months = $request->advance_maintenance_for_months;
        $storeData->legal_charges = $request->legal_charges;
        $storeData->others_1_charges_name = $request->others_1_charges_name;
        $storeData->others_1_charges = $request->others_1_charges;
        $storeData->others_2_charges_name = $request->others_2_charges_name;
        $storeData->others_2_charges = $request->others_2_charges;
        $storeData->others_3_charges_name = $request->others_3_charges_name;
        $storeData->others_3_charges = $request->others_3_charges;
        $storeData->estimated_total_price = $request->estimated_total_price;
        $storeData->gst_charges = $request->gst_charges;
        $storeData->registration_charges = $request->registration_charges;
        $storeData->floor_plan_path = $request->floor_plan_path;
        $storeData->thumbnail_path = $request->thumbnail_path;
        $storeData->metadata = $request->metadata;
        $storeData->order = $request->order;
        $storeData->unit_status = $request->unit_status;
        $storeData->created_by_type = $request->created_by_type;
        $storeData->created_by  = $request->created_by;
        $storeData->created_date = Carbon::now();
        $storeData->created_ip = $request->created_ip;

        if ( $storeData->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Project Listing Units details are stored!');
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
        $result = ProjectListingUnitsModel::where( 'unit_status', '=', 'A' )
        ->where( 'id', '=', $id )
        ->first();

        if ( !$result ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Project Listing Units details are not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Project Listing Units details');
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
            'project_listing_id'=> 'required|integer',
            'villa_type_id'=> 'integer', 
            'farm_house_type_id'=> 'integer',
            'property_facing_id'=> 'integer',
            'property_bhk_size_id'=> 'integer',
            'super_built_up_area'=> 'htmltags',
            'carpet_area'=> 'htmltags',
            'floor_level'=> 'htmltags',
            'car_parkings'=> 'integer',
            'balconies'=> 'integer',
            'bathrooms'=> 'integer',
            'uds'=> 'required|htmltags',
            'property_uds_size_id'=> 'required|integer',
            'plot_size'=> 'htmltags',
            'property_size_id'=> 'required|integer',
            'length'=> 'required|htmltags',
            'width'=> 'required|htmltags',
            'dimension_representation'=> 'required|htmltags',
            'north_facing_road_width_in_fts'=> 'htmltags',
            'currency'=> 'required|htmltags',
            'base_price'=> 'required|htmltags',
            'total_base_price'=> 'required|htmltags',
            'amenities_charges'=> 'required|htmltags',
            'car_parking_charges'=> 'htmltags',
            'club_house_charges'=> 'htmltags',
            'corpus_fund'=> 'htmltags',
            'advance_maintenance_charges'=> 'htmltags',
            'advance_maintenance_for_months'=> 'integer',
            'legal_charges'=> 'htmltags',
            'others_1_charges_name'=> 'htmltags',
            'others_1_charges'=> 'htmltags',
            'others_2_charges_name'=> 'htmltags',
            'others_2_charges'=> 'htmltags',
            'others_3_charges_name'=> 'htmltags',
            'others_3_charges'=> 'htmltags',
            'estimated_total_price'=> 'required|htmltags',
            'gst_charges'=> 'htmltags',
            'registration_charges'=> 'htmltags',
            'floor_plan_path'=> 'required|htmltags',
            'thumbnail_path'=> 'htmltags',
            'metadata'=> 'htmltags',
            'order'=> 'integer',
            'updated_by_type' => 'required|integer',
            'unit_status' => 'required|htmltags|IN:A,I',
            'updated_by' => 'required|integer',
            'updated_ip' => 'required|htmltags'
        ];
        $niceNames = [
            'project_listing_id'=> 'project listing id',
            'villa_type_id'=> 'villa type id', 
            'farm_house_type_id'=> 'farm house type id',
            'property_facing_id'=> 'property facing id',
            'property_bhk_size_id'=> 'property bhk size id',
            'super_built_up_area'=> 'super built up area',
            'carpet_area'=> 'carpet area',
            'floor_level'=> 'floor level',
            'car_parkings'=> 'car parkings',
            'balconies'=> 'balconies',
            'bathrooms'=> 'bathrooms',
            'uds'=> 'uds',
            'property_uds_size_id'=> 'property uds size id',
            'plot_size'=> 'plot size',
            'property_size_id'=> 'property size id',
            'length'=> 'length',
            'width'=> 'width',
            'dimension_representation'=> 'dimension representation',
            'north_facing_road_width_in_fts'=> 'north facing road width in fts',
            'currency'=> 'currency',
            'base_price'=> 'base price',
            'total_base_price'=> 'total base price',
            'amenities_charges'=> 'amenities charges',
            'car_parking_charges'=> 'car parking charges',
            'club_house_charges'=> 'club house charges',
            'corpus_fund'=> 'corpus fund',
            'advance_maintenance_charges'=> 'advance maintenance charges',
            'advance_maintenance_for_months'=> 'advance maintenance for months',
            'legal_charges'=> 'legal charges',
            'others_1_charges_name'=> 'others_1 charges name',
            'others_1_charges'=> 'others_1 charges',
            'others_2_charges_name'=> 'others_2 charges name',
            'others_2_charges'=> 'others_2 charges',
            'others_3_charges_name'=> 'others_3 charges name',
            'others_3_charges'=> 'others_3 charges',
            'estimated_total_price'=> 'estimated total price',
            'gst_charges'=> 'gst charges',
            'registration_charges'=> 'registration charges',
            'floor_plan_path'=> 'floor plan path',
            'thumbnail_path'=> 'thumbnail path',
            'metadata'=> 'metadata',
            'order'=> 'order',
            'updated_by_type' => 'updated by type',
            'unit_status'  => 'status',
            'updated_by'  => 'updated by',
            'updated_ip'  => 'updated ip',
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
        $plum = ProjectListingUnitsModel::find( $id );

        if ( !$plum ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Project Listing Units details are not found!');
            return response()->json($response, 200);
        }

        $plum->project_listing_id = $request->project_listing_id;
        $plum->villa_type_id = $request->villa_type_id; 
        $plum->farm_house_type_id = $request->farm_house_type_id;
        $plum->property_facing_id = $request->property_facing_id;
        $plum->property_bhk_size_id = $request->property_bhk_size_id;
        $plum->super_built_up_area = $request->super_built_up_area;
        $plum->carpet_area = $request->carpet_area;
        $plum->floor_level = $request->floor_level;
        $plum->car_parkings = $request->car_parkings;
        $plum->balconies = $request->balconies;
        $plum->bathrooms = $request->bathrooms;
        $plum->uds = $request->uds;
        $plum->property_uds_size_id = $request->property_uds_size_id;
        $plum->plot_size = $request->plot_size;
        $plum->property_size_id = $request->property_size_id;
        $plum->length = $request->length;
        $plum->width = $request->width;
        $plum->dimension_representation = $request->dimension_representation;
        $plum->north_facing_road_width_in_fts = $request->north_facing_road_width_in_fts;
        $plum->currency = $request->currency;
        $plum->base_price = $request->base_price;
        $plum->total_base_price = $request->total_base_price;
        $plum->amenities_charges = $request->amenities_charges;
        $plum->car_parking_charges = $request->car_parking_charges;
        $plum->club_house_charges = $request->club_house_charges;
        $plum->corpus_fund = $request->corpus_fund;
        $plum->advance_maintenance_charges = $request->advance_maintenance_charges;
        $plum->advance_maintenance_for_months = $request->advance_maintenance_for_months;
        $plum->legal_charges = $request->legal_charges;
        $plum->others_1_charges_name = $request->others_1_charges_name;
        $plum->others_1_charges = $request->others_1_charges;
        $plum->others_2_charges_name = $request->others_2_charges_name;
        $plum->others_2_charges = $request->others_2_charges;
        $plum->others_3_charges_name = $request->others_3_charges_name;
        $plum->others_3_charges = $request->others_3_charges;
        $plum->estimated_total_price = $request->estimated_total_price;
        $plum->gst_charges = $request->gst_charges;
        $plum->registration_charges = $request->registration_charges;
        $plum->floor_plan_path = $request->floor_plan_path;
        $plum->thumbnail_path = $request->thumbnail_path;
        $plum->metadata = $request->metadata;
        $plum->order = $request->order;
        $plum->unit_status = $request->unit_status;
        $plum->updated_by = $request->updated_by;
        $plum->updated_date = Carbon::now();
        $plum->updated_ip = $request->updated_ip;

        if ( $plum->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Project Listing Units details are updated!');
            $response['data'] = $plum;
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
        // Delete the specified Project Listing Units details
        $plum = ProjectListingUnitsModel::find( $id );
        if ( !$plum ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Project Listing Units details are not found!');
            return response()->json($response, 200);
        }

        if ( $plum->delete() ) {
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Project Listing Units details are deleted!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
