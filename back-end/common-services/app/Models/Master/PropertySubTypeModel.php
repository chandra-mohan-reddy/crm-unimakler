<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertySubTypeModel extends Model
{
    use HasFactory;

    protected $table = 'master_property_sub_type';
    protected $primaryKey = 'id';
    protected $fillable = [
        'property_type_id',
        'name', 
        'description',
        'sub_type_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
