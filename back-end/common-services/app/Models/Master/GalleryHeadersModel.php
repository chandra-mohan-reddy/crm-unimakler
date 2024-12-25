<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryHeadersModel extends Model
{
    use HasFactory;
    protected $table = 'master_gallery_headers';
    protected $primaryKey = 'id';
    protected $fillable = [
        'country_code',
        'name', 
        'description',
        'gallery_header_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
