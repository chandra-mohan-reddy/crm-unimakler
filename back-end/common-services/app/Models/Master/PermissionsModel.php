<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PermissionsModel extends Model
{
    use HasFactory;
    protected $table = 'master_permissions';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'description',
        'permission_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
