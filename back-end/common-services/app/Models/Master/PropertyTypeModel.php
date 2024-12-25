<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyTypeModel extends Model
{
    use HasFactory;

    protected $table = 'master_property_type';
    protected $primaryKey = 'id';
    protected $fillable = [
        'country_code',
        'name', 
        'description',
        'property_type_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
