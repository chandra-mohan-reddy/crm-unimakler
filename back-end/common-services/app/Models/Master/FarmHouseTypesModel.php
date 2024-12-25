<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FarmHouseTypesModel extends Model
{
    use HasFactory;

    protected $table = 'master_farm_house_types';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'description',
        'type_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
