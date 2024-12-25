<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApprovalAuthorityModel extends Model
{
    use HasFactory;

    protected $table = 'master_approval_authority';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'country_code', 
        'state_code', 
        'city_code', 
        'description',
        'approval_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];

}
