<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class UserModel extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use HasFactory;

    protected $table = 'users';
    protected $primaryKey  = 'id';
    protected $hidden = [
        'password',
    ];
    protected $fillable = ['first_name','last_name','email','mobile','username','password','country_code','state_code', 'city_code','role_id','address',
    'created_by','created_date'];

    public $timestamps = false;
    protected $casts = [
        'created_date' => 'date:d-m-Y H:i:s',
        'created' => 'date:d-m-Y H:i:s',
    ];
}
