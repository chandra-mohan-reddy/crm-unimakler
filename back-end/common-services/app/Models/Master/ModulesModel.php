<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModulesModel extends Model
{
    use HasFactory;
    protected $table = 'master_modules';
    protected $primaryKey = 'module_id';
    protected $fillable = [
        'module',
        'order',
        'status',
        'deleted_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
