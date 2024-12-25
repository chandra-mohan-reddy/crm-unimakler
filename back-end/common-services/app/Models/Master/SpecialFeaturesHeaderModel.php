<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpecialFeaturesHeaderModel extends Model
{
    use HasFactory;

    protected $table = 'master_special_features_header';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'country_code', 
        'description',
        'special_feature_header_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
