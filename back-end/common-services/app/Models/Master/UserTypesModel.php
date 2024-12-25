<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserTypesModel extends Model
{
    use HasFactory;
    protected $table = 'master_user_type';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'description',
        'user_type_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
