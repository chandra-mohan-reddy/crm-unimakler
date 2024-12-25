<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BuilderModel extends Model
{
    use HasFactory;

    protected $table = 'builders';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'headoffice_location', 
        'md_name', 
        'md_phone_number', 
        'cp_manager_name', 
        'cp_manager_phone_number',
        'sales_manager_name',
        'sales_manager_phone_number',
        'slug',
        'order',
        'logo_path',
        'builder_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
