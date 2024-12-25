<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CountryModel extends Model
{
    use HasFactory;
    protected $table = 'master_country';
    protected $primaryKey = 'id';
    protected $fillable = [
        'country_name',
        'country_code',
        'phone_code'
    ];
    public $timestamps = false;
}
