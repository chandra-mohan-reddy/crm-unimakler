<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistrationModel extends Model
{
    use HasFactory;
    protected $table = 'registration';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_type_id',
        'first_name', 
        'last_name',
        'email',
        'mobile',
        'username',
        'password',
        'country_code',
        'state_code',
        'city_code',
        'address',
        'company_name',
        'gst_number',
        'registration_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
