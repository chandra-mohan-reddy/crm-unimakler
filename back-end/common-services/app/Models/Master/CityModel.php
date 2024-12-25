<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CityModel extends Model
{
    use HasFactory;
    protected $table = 'master_cities';
    protected $primaryKey = 'id';
    protected $fillable = [
        'city_name',
        'city_code',
        'country_code',
        'state_code'
    ];
    public $timestamps = false;
}
