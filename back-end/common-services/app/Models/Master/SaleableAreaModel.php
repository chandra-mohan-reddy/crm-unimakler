<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleableAreaModel extends Model
{
    use HasFactory;

    protected $table = 'master_saleable_area_representation';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'description',
        'saleable_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];

}
