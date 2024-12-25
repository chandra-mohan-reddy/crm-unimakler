<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectListingsModel extends Model
{
    use HasFactory;
    protected $table = 'project_listings';
    protected $primaryKey = 'id';
    protected $fillable = [
        'project_name_id',
        'project_listing_name', 
        'property_type_id',
        'property_sub_type_id',
        'listing_type_id',
        'country_code',
        'state_code',
        'city_code',
        'locality',
        'sub_locality',
        'street_name',
        'door_number',
        'builder_id',
        'listed_by',
        'latitude',
        'longitude',
        'approval_authority',
        'approval_number',
        'approval_year',
        'approval_document_path',
        'real_estate_authority',
        'real_estate_approval_number',
        'real_estate_approval_year',
        'real_estate_approval_document_path',
        'other_1_approval_name',
        'other_1_approval_number',
        'other_1_approval_year',
        'other_1_approval_document_path',
        'other_2_approval_name',
        'other_2_approval_number',
        'other_2_approval_year',
        'other_2_approval_document_path',
        'other_3_approval_name',
        'other_3_approval_number',
        'other_3_approval_year',
        'other_3_approval_document_path',
        'total_project_land_area',
        'total_project_land_area_size_id',
        'water_source',
        'number_of_borewells',
        'ground_water_depth',
        'community_type_id',
        'property_min_size',
        'property_max_size',
        'property_size_representation_id',
        'possession_status_id',
        'project_description',
        'preffered_location_charges_facing_per_sft',
        'preffered_location_charges_corner_per_sft',
        'contact_timing_from',
        'contact_timing_to',
        'broucher_path',
        'project_status',
        'created_by_type',
        'updated_by_type',
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
