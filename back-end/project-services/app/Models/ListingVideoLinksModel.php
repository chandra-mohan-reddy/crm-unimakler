<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListingVideoLinksModel extends Model
{
    use HasFactory;
    protected $table = 'project_listing_video_links';
    protected $primaryKey = 'id';
    protected $fillable = [
        'project_listing_id',
        'video_url', 
        'video_type',
        'created_by_type',
        'video_status',
        'updated_by_type',
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
