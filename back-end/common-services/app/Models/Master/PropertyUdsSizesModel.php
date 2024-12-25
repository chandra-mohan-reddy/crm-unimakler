<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyUdsSizesModel extends Model
{
    use HasFactory;

    protected $table = 'master_property_uds_sizes';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'country_code', 
        'description',
        'property_uds_size_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
