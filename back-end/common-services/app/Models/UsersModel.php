<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersModel extends Model
{
    use HasFactory;
    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $fillable = [
        'role_id',
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
        'user_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
