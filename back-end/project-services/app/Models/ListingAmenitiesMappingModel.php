<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListingAmenitiesMappingModel extends Model
{
    use HasFactory;
    protected $table = 'project_listing_amenities_mapping';
    protected $primaryKey = 'id';
    protected $fillable = [
        'project_listing_id',
        'amenities_id', 
        'mapping_status',
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
