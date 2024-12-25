<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListingTypeModel extends Model
{
    use HasFactory;

    protected $table = 'master_listing_type';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'description', 
        'slug',
        'order',
        'listing_type_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
