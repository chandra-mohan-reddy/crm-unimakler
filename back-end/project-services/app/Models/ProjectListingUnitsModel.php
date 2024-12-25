<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectListingUnitsModel extends Model
{
    use HasFactory;
    protected $table = 'project_listing_units';
    protected $primaryKey = 'id';
    protected $fillable = [
        'project_listing_id',
        'villa_type_id', 
        'farm_house_type_id',
        'property_facing_id',
        'property_bhk_size_id',
        'super_built_up_area',
        'carpet_area',
        'floor_level',
        'car_parkings',
        'balconies',
        'bathrooms',
        'uds',
        'property_uds_size_id',
        'plot_size',
        'property_size_id',
        'length',
        'width',
        'dimension_representation',
        'north_facing_road_width_in_fts',
        'currency',
        'base_price',
        'total_base_price',
        'amenities_charges',
        'car_parking_charges',
        'club_house_charges',
        'corpus_fund',
        'advance_maintenance_charges',
        'advance_maintenance_for_months',
        'legal_charges',
        'others_1_charges_name',
        'others_1_charges',
        'others_2_charges_name',
        'others_2_charges',
        'others_3_charges_name',
        'others_3_charges',
        'estimated_total_price',
        'gst_charges',
        'registration_charges',
        'floor_plan_path',
        'thumbnail_path',
        'metadata',
        'order',
        'unit_status',
        'created_by_type',
        'updated_by_type',
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
