<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LocalityModel extends Model
{
    use HasFactory;
    protected $table = 'master_locality';
    protected $primaryKey = 'id';
    protected $fillable = [
        'locality_name',
        'city_code',
        'country_code',
        'state_code'
    ];
    public $timestamps = false;
}
