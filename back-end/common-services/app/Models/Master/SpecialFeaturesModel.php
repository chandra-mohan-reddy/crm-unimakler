<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpecialFeaturesModel extends Model
{
    use HasFactory;

    protected $table = 'master_special_features';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'description',
        'special_features_header_id',
        'special_feature_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
