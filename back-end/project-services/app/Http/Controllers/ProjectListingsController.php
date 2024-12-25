<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\ProjectListingsModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
use Illuminate\Support\Facades\Hash;
use DB;

class ProjectListingsController extends Controller
{
    /**
    * Display a listing of the resource.
    */

    public function index() {
        $data = ProjectListingsModel::where( 'project_status', '=', 'A' )->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Project Listing Data');
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
            'project_name_id'=> 'required|integer',
            'project_listing_name'=> 'required|htmltags',
            'property_type_id'=> 'required|integer',
            'property_sub_type_id'=> 'required|integer',
            'listing_type_id'=> 'required|integer',
            'country_code'=> 'required|htmltags',
            'state_code'=> 'required|htmltags',
            'city_code'=> 'required|htmltags',
            'locality'=> 'required|htmltags',
            'sub_locality'=> 'required|htmltags',
            'street_name'=> 'required|htmltags',
            'door_number'=> 'required|htmltags',
            'builder_id'=> 'required|integer',
            'listed_by'=> 'required|integer',
            'latitude'=> 'required|htmltags',
            'longitude'=> 'required|htmltags',
            'approval_authority'=> 'required|htmltags',
            'approval_number'=> 'required|htmltags',
            'approval_year'=> 'required|htmltags',
            'approval_document_path'=> 'required|htmltags',
            'real_estate_authority'=> 'required|htmltags',
            'real_estate_approval_number'=> 'required|htmltags',
            'real_estate_approval_year'=> 'required|htmltags',
            'real_estate_approval_document_path'=> 'required|htmltags',
            'other_1_approval_name'=> 'htmltags',
            'other_1_approval_number'=> 'htmltags',
            'other_1_approval_year'=> 'htmltags',
            'other_1_approval_document_path'=> 'htmltags',
            'other_2_approval_name'=> 'htmltags',
            'other_2_approval_number'=> 'htmltags',
            'other_2_approval_year'=> 'htmltags',
            'other_2_approval_document_path'=> 'htmltags',
            'other_3_approval_name'=> 'htmltags',
            'other_3_approval_number'=> 'htmltags',
            'other_3_approval_year'=> 'htmltags',
            'other_3_approval_document_path'=> 'htmltags',
            'total_project_land_area'=> 'required|htmltags',
            'total_project_land_area_size_id'=> 'required|htmltags',
            'water_source'=> 'required|htmltags',
            'number_of_borewells'=> 'required|htmltags',
            'ground_water_depth'=> 'required|htmltags',
            'community_type_id'=> 'required|integer',
            'property_min_size'=> 'required|htmltags',
            'property_max_size'=> 'required|htmltags',
            'property_size_representation_id'=> 'required|htmltags',
            'possession_status_id'=> 'required|htmltags',
            'project_description'=> 'required|htmltags',
            'preffered_location_charges_facing_per_sft'=> 'required|htmltags',
            'preffered_location_charges_corner_per_sft'=> 'required|htmltags',
            'contact_timing_from'=> 'required|htmltags',
            'contact_timing_to'=> 'required|htmltags',
            'broucher_path'=> 'required|htmltags',
            'project_status'=> 'required|htmltags|IN:A,I',
            'created_by_type'=> 'required|integer',
            'created_by'            => 'required|integer',
            'created_ip'            => 'required|htmltags'
        ];
        $niceNames = [
            'project_name_id'=> 'project name id',
            'project_listing_name'=> 'project listing name',
            'property_type_id'=> 'property type id',
            'property_sub_type_id'=> 'property sub type id',
            'listing_type_id'=> 'listing type id',
            'country_code'=> 'country code',
            'state_code'=> 'status code',
            'city_code'=> 'city code',
            'locality'=> 'locality',
            'sub_locality'=> 'sub locality',
            'street_name'=> 'street name',
            'door_number'=> 'door number',
            'builder_id'=> 'builder id',
            'listed_by'=> 'listed by',
            'latitude'=> 'latitude',
            'longitude'=> 'longitude',
            'approval_authority'=> 'approval authority',
            'approval_number'=> 'approval number',
            'approval_year'=> 'approval year',
            'approval_document_path'=> 'approval document path',
            'real_estate_authority'=> 'real estate authority',
            'real_estate_approval_number'=> 'real estate approval number',
            'real_estate_approval_year'=> 'real estate approval year',
            'real_estate_approval_document_path'=> 'real estate approval document path',
            'other_1_approval_name'=> 'other_1 approval name',
            'other_1_approval_number'=> 'other_1 approval number',
            'other_1_approval_year'=> 'other_1 approval year',
            'other_1_approval_document_path'=> 'other_1 approval document path',
            'other_2_approval_name'=> 'other_2  pproval name',
            'other_2_approval_number'=> 'other_2 approval number',
            'other_2_approval_year'=> 'other_2 approval year',
            'other_2_approval_document_path'=> 'other_2 approval document path',
            'other_3_approval_name'=> 'other_3 approval name',
            'other_3_approval_number'=> 'other_3 approval number',
            'other_3_approval_year'=> 'other_3 approval year',
            'other_3_approval_document_path'=> 'other_3 approval document path',
            'total_project_land_area'=> 'total project land area',
            'total_project_land_area_size_id'=> 'total project land area size id',
            'water_source'=> 'water source',
            'number_of_borewells'=> 'number of borewells',
            'ground_water_depth'=> 'ground water depth',
            'community_type_id'=> 'community type id',
            'property_min_size'=> 'property min size',
            'property_max_size'=> 'property max size',
            'property_size_representation_id'=> 'rproperty size representation id',
            'possession_status_id'=> 'possession status id',
            'project_description'=> 'project description',
            'preffered_location_charges_facing_per_sft'=> 'preffered location charges facing per sft',
            'preffered_location_charges_corner_per_sft'=> 'preffered location charges corner per sft',
            'contact_timing_from'=> 'contact timing from',
            'contact_timing_to'=> 'contact timing to',
            'broucher_path'=> 'broucher path',
            'created_by_type'=> 'created by type',
            'project_status' => 'status',
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
        $storeData = new ProjectListingsModel;
        $storeData->project_name_id= $request->project_name_id;
        $storeData->project_listing_name = $request->project_listing_name;
        $storeData->property_type_id = $request->property_type_id;
        $storeData->property_sub_type_id = $request->property_sub_type_id;
        $storeData->listing_type_id = $request->listing_type_id;
        $storeData->country_code = $request->country_code;
        $storeData->state_code = $request->state_code;
        $storeData->city_code = $request->city_code;
        $storeData->locality = $request->locality;
        $storeData->sub_locality = $request->sub_locality;
        $storeData->street_name = $request->street_name;
        $storeData->door_number = $request->door_number;
        $storeData->builder_id = $request->builder_id;
        $storeData->listed_by = $request->listed_by;
        $storeData->latitude = $request->latitude;
        $storeData->longitude = $request->longitude;
        $storeData->approval_authority = $request->approval_authority;
        $storeData->approval_number = $request->approval_number;
        $storeData->approval_year = $request->approval_year;
        $storeData->approval_document_path = $request->approval_document_path;
        $storeData->real_estate_authority = $request->real_estate_authority;
        $storeData->real_estate_approval_number = $request->real_estate_approval_number;
        $storeData->real_estate_approval_year = $request->real_estate_approval_year;
        $storeData->real_estate_approval_document_path = $request->real_estate_approval_document_path;
        $storeData->other_1_approval_name = $request->other_1_approval_name;
        $storeData->other_1_approval_number = $request->other_1_approval_number;
        $storeData->other_1_approval_year = $request->other_1_approval_year;
        $storeData->other_1_approval_document_path = $request->other_1_approval_document_path;
        $storeData->other_2_approval_name = $request->other_2_approval_name;
        $storeData->other_2_approval_number = $request->other_2_approval_number;
        $storeData->other_2_approval_year = $request->other_2_approval_year;
        $storeData->other_2_approval_document_path = $request->other_2_approval_document_path;
        $storeData->other_3_approval_name = $request->other_3_approval_name;
        $storeData->other_3_approval_number = $request->other_3_approval_number;
        $storeData->other_3_approval_year = $request->other_3_approval_year;
        $storeData->other_3_approval_document_path = $request->other_3_approval_document_path;
        $storeData->total_project_land_area = $request->total_project_land_area;
        $storeData->total_project_land_area_size_id = $request->total_project_land_area_size_id;
        $storeData->water_source = $request->water_source;
        $storeData->number_of_borewells = $request->number_of_borewells;
        $storeData->ground_water_depth = $request->ground_water_depth;
        $storeData->community_type_id = $request->community_type_id;
        $storeData->property_min_size = $request->property_min_size;
        $storeData->property_max_size = $request->property_max_size;
        $storeData->property_size_representation_id = $request->property_size_representation_id;
        $storeData->possession_status_id = $request->possession_status_id;
        $storeData->project_description = $request->project_description;
        $storeData->preffered_location_charges_facing_per_sft = $request->preffered_location_charges_facing_per_sft;
        $storeData->preffered_location_charges_corner_per_sft = $request->preffered_location_charges_corner_per_sft;
        $storeData->contact_timing_from = $request->contact_timing_from;
        $storeData->contact_timing_to = $request->contact_timing_to;
        $storeData->broucher_path = $request->broucher_path;
        $storeData->project_status = $request->project_status;
        $storeData->created_by_type = $request->created_by_type;
        $storeData->created_by           = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;

        if ( $storeData->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Project listing details are stored!');
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
        $result = ProjectListingsModel::where( 'project_status', '=', 'A' )
        ->where( 'id', '=', $id )
        ->first();

        if ( !$result ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Project listing details are not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Project listing details');
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
            'project_name_id'=> 'required|integer',
            'project_listing_name'=> 'required|htmltags',
            'property_type_id'=> 'required|integer',
            'property_sub_type_id'=> 'required|integer',
            'listing_type_id'=> 'required|integer',
            'country_code'=> 'required|htmltags',
            'state_code'=> 'required|htmltags',
            'city_code'=> 'required|htmltags',
            'locality'=> 'required|htmltags',
            'sub_locality'=> 'required|htmltags',
            'street_name'=> 'required|htmltags',
            'door_number'=> 'required|htmltags',
            'builder_id'=> 'required|integer',
            'listed_by'=> 'required|integer',
            'latitude'=> 'required|htmltags',
            'longitude'=> 'required|htmltags',
            'approval_authority'=> 'required|htmltags',
            'approval_number'=> 'required|htmltags',
            'approval_year'=> 'required|htmltags',
            'approval_document_path'=> 'required|htmltags',
            'real_estate_authority'=> 'required|htmltags',
            'real_estate_approval_number'=> 'required|htmltags',
            'real_estate_approval_year'=> 'required|htmltags',
            'real_estate_approval_document_path'=> 'required|htmltags',
            'other_1_approval_name'=> 'htmltags',
            'other_1_approval_number'=> 'htmltags',
            'other_1_approval_year'=> 'htmltags',
            'other_1_approval_document_path'=> 'htmltags',
            'other_2_approval_name'=> 'htmltags',
            'other_2_approval_number'=> 'htmltags',
            'other_2_approval_year'=> 'htmltags',
            'other_2_approval_document_path'=> 'htmltags',
            'other_3_approval_name'=> 'htmltags',
            'other_3_approval_number'=> 'htmltags',
            'other_3_approval_year'=> 'htmltags',
            'other_3_approval_document_path'=> 'htmltags',
            'total_project_land_area'=> 'required|htmltags',
            'total_project_land_area_size_id'=> 'required|htmltags',
            'water_source'=> 'required|htmltags',
            'number_of_borewells'=> 'required|htmltags',
            'ground_water_depth'=> 'required|htmltags',
            'community_type_id'=> 'required|integer',
            'property_min_size'=> 'required|htmltags',
            'property_max_size'=> 'required|htmltags',
            'property_size_representation_id'=> 'required|htmltags',
            'possession_status_id'=> 'required|htmltags',
            'project_description'=> 'required|htmltags',
            'preffered_location_charges_facing_per_sft'=> 'required|htmltags',
            'preffered_location_charges_corner_per_sft'=> 'required|htmltags',
            'contact_timing_from'=> 'required|htmltags',
            'contact_timing_to'=> 'required|htmltags',
            'broucher_path'=> 'required|htmltags',
            'updated_by_type' => 'required|integer',
            'project_status' => 'required|htmltags|IN:A,I',
            'updated_by' => 'required|integer',
            'updated_ip' => 'required|htmltags'
        ];
        $niceNames = [
            'project_name_id'=> 'project name id',
            'project_listing_name'=> 'project listing name',
            'property_type_id'=> 'property type id',
            'property_sub_type_id'=> 'property sub type id',
            'listing_type_id'=> 'listing type id',
            'country_code'=> 'country code',
            'state_code'=> 'status code',
            'city_code'=> 'city code',
            'locality'=> 'locality',
            'sub_locality'=> 'sub locality',
            'street_name'=> 'street name',
            'door_number'=> 'door number',
            'builder_id'=> 'builder id',
            'listed_by'=> 'listed by',
            'latitude'=> 'latitude',
            'longitude'=> 'longitude',
            'approval_authority'=> 'approval authority',
            'approval_number'=> 'approval number',
            'approval_year'=> 'approval year',
            'approval_document_path'=> 'approval document path',
            'real_estate_authority'=> 'real estate authority',
            'real_estate_approval_number'=> 'real estate approval number',
            'real_estate_approval_year'=> 'real estate approval year',
            'real_estate_approval_document_path'=> 'real estate approval document path',
            'other_1_approval_name'=> 'other_1 approval name',
            'other_1_approval_number'=> 'other_1 approval number',
            'other_1_approval_year'=> 'other_1 approval year',
            'other_1_approval_document_path'=> 'other_1 approval document path',
            'other_2_approval_name'=> 'other_2  pproval name',
            'other_2_approval_number'=> 'other_2 approval number',
            'other_2_approval_year'=> 'other_2 approval year',
            'other_2_approval_document_path'=> 'other_2 approval document path',
            'other_3_approval_name'=> 'other_3 approval name',
            'other_3_approval_number'=> 'other_3 approval number',
            'other_3_approval_year'=> 'other_3 approval year',
            'other_3_approval_document_path'=> 'other_3 approval document path',
            'total_project_land_area'=> 'total project land area',
            'total_project_land_area_size_id'=> 'total project land area size id',
            'water_source'=> 'water source',
            'number_of_borewells'=> 'number of borewells',
            'ground_water_depth'=> 'ground water depth',
            'community_type_id'=> 'community type id',
            'property_min_size'=> 'property min size',
            'property_max_size'=> 'property max size',
            'property_size_representation_id'=> 'rproperty size representation id',
            'possession_status_id'=> 'possession status id',
            'project_description'=> 'project description',
            'preffered_location_charges_facing_per_sft'=> 'preffered location charges facing per sft',
            'preffered_location_charges_corner_per_sft'=> 'preffered location charges corner per sft',
            'contact_timing_from'=> 'contact timing from',
            'contact_timing_to'=> 'contact timing to',
            'broucher_path'=> 'broucher path',
            'updated_by_type'       => 'updated by type',
            'project_status'          => 'status',
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
        $pl = ProjectListingsModel::find( $id );

        if ( !$pl ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Project listing details are not found!');
            return response()->json($response, 200);
        }

        $pl->project_name_id= $request->project_name_id;
        $pl->project_listing_name = $request->project_listing_name;
        $pl->property_type_id = $request->property_type_id;
        $pl->property_sub_type_id = $request->property_sub_type_id;
        $pl->listing_type_id = $request->listing_type_id;
        $pl->country_code = $request->country_code;
        $pl->state_code = $request->state_code;
        $pl->city_code = $request->city_code;
        $pl->locality = $request->locality;
        $pl->sub_locality = $request->sub_locality;
        $pl->street_name = $request->street_name;
        $pl->door_number = $request->door_number;
        $pl->builder_id = $request->builder_id;
        $pl->listed_by = $request->listed_by;
        $pl->latitude = $request->latitude;
        $pl->longitude = $request->longitude;
        $pl->approval_authority = $request->approval_authority;
        $pl->approval_number = $request->approval_number;
        $pl->approval_year = $request->approval_year;
        $pl->approval_document_path = $request->approval_document_path;
        $pl->real_estate_authority = $request->real_estate_authority;
        $pl->real_estate_approval_number = $request->real_estate_approval_number;
        $pl->real_estate_approval_year = $request->real_estate_approval_year;
        $pl->real_estate_approval_document_path = $request->real_estate_approval_document_path;
        $pl->other_1_approval_name = $request->other_1_approval_name;
        $pl->other_1_approval_number = $request->other_1_approval_number;
        $pl->other_1_approval_year = $request->other_1_approval_year;
        $pl->other_1_approval_document_path = $request->other_1_approval_document_path;
        $pl->other_2_approval_name = $request->other_2_approval_name;
        $pl->other_2_approval_number = $request->other_2_approval_number;
        $pl->other_2_approval_year = $request->other_2_approval_year;
        $pl->other_2_approval_document_path = $request->other_2_approval_document_path;
        $pl->other_3_approval_name = $request->other_3_approval_name;
        $pl->other_3_approval_number = $request->other_3_approval_number;
        $pl->other_3_approval_year = $request->other_3_approval_year;
        $pl->other_3_approval_document_path = $request->other_3_approval_document_path;
        $pl->total_project_land_area = $request->total_project_land_area;
        $pl->total_project_land_area_size_id = $request->total_project_land_area_size_id;
        $pl->water_source = $request->water_source;
        $pl->number_of_borewells = $request->number_of_borewells;
        $pl->ground_water_depth = $request->ground_water_depth;
        $pl->community_type_id = $request->community_type_id;
        $pl->property_min_size = $request->property_min_size;
        $pl->property_max_size = $request->property_max_size;
        $pl->property_size_representation_id = $request->property_size_representation_id;
        $pl->possession_status_id = $request->possession_status_id;
        $pl->project_description = $request->project_description;
        $pl->preffered_location_charges_facing_per_sft = $request->preffered_location_charges_facing_per_sft;
        $pl->preffered_location_charges_corner_per_sft = $request->preffered_location_charges_corner_per_sft;
        $pl->contact_timing_from = $request->contact_timing_from;
        $pl->contact_timing_to = $request->contact_timing_to;
        $pl->broucher_path = $request->broucher_path;
        $pl->updated_by_type = $request->updated_by_type;
        $pl->project_status = $request->project_status;
        $pl->updated_by = $request->updated_by;
        $pl->updated_date = Carbon::now();
        $pl->updated_ip = $request->updated_ip;

        if ( $pl->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Project listing details are updated!');
            $response['data'] = $pl;
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
        // Delete the specified Project listing details
        $pl = ProjectListingsModel::find( $id );
        if ( !$pl ) {
            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Project listing details are not found!');
            return response()->json($response, 200);
        }

        if ( $pl->delete() ) {
            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Project listing details are deleted!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
