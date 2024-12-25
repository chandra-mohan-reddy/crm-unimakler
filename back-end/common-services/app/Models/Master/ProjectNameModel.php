<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectNameModel extends Model
{
    use HasFactory;

    protected $table = 'master_project_name';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'country_code', 
        'state_code',
        'city_code',
        'locality',
        'builder_id',
        'position',
        'mobile_number',
        'email',
        'project_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
