<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    use HasFactory;
    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $fillable = [
        'id',
        'role_id',
        'user_type_id',
        'emp_id',
        'name',
        'email',
        'mobile',
        'gender',
        'dob',
        'username',
        'password',
        'country_code',
        'state_code',
        'city_code',
        'locality',
        'address',
        'user_status',
        'aadhar_number',
        'pan_card',
        'start_date',
        'end_date',
        'description',
        'created_by',
        'created_date',
        'updated_by',
        'updated_date',
        'created_ip',
        'updated_ip',
      ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
        'password'
    ];
}
