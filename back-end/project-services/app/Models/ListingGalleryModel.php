<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListingGalleryModel extends Model
{
    use HasFactory;
    protected $table = 'project_listing_gallery';
    protected $primaryKey = 'id';
    protected $fillable = [
        'project_listing_id',
        'gallery_header_id', 
        'file_path',
        'thumbnail_path',
        'metadata',
        'order',
        'created_by_type',
        'gallery_status',
        'updated_by_type',
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
