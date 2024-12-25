<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommunityTypesModel extends Model
{
    use HasFactory;
    protected $table = 'master_community_types';
    protected $primaryKey = 'id';
    protected $fillable = [
        'country_code',
        'name', 
        'description',
        'community_type_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
