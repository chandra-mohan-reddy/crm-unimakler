<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RolePermissionsMappingModel extends Model
{
    use HasFactory;
    protected $table = 'role_permissions_mapping';
    protected $primaryKey = 'id';
    protected $fillable = [
        'role_id', 
        'permission_id',
        'role_permission_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
