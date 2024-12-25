<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertySizesModel extends Model
{
    use HasFactory;

    protected $table = 'master_property_sizes';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'country_code', 
        'description',
        'property_size_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
