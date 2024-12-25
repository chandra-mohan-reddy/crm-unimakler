<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AmenitiesModel extends Model
{
    use HasFactory;
    protected $table = 'master_amenities';
    protected $primaryKey = 'id';
    protected $fillable = [
        'amenities_header_id',
        'name', 
        'description',
        'amenities_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
