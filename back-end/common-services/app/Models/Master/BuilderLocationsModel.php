<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BuilderLocationsModel extends Model
{
    use HasFactory;

    protected $table = 'builder_locations';
    protected $primaryKey = 'id';
    protected $fillable = [
        'builder_id', 
        'state', 
        'city', 
        'address', 
        'contact_person_name', 
        'contact_person_phone_number',
        'builder_location_status'       
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
