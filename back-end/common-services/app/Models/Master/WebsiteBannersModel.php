<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebsiteBannersModel extends Model
{
    use HasFactory;

    protected $table = 'website_banners';
    protected $primaryKey = 'id';
    protected $fillable = [
        'project_listing_id', 
        'banner_type_id',
        'banner_position',
        'banner_status',
        'created_by_type',
        'updated_by_type'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
