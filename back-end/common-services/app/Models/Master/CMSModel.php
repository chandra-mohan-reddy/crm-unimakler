<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CMSModel extends Model
{
    use HasFactory;

    protected $table = 'cms_pages';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'description', 
        'content', 
        'permalink', 
        'meta_title', 
        'meta_keywords',
        'meta_description',
        'meta_image',
        'page_status',
        'position'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}