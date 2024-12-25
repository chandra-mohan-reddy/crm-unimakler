<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListingSpecialFeaturesMappingModel extends Model
{
    use HasFactory;
    protected $table = 'project_listing_special_features_mapping';
    protected $primaryKey = 'id';
    protected $fillable = [
        'project_listing_id',
        'special_feature_id', 
        'created_by_type',
        'mapping_status',
        'updated_by_type',
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
