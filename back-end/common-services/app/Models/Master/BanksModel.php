<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BanksModel extends Model
{
    use HasFactory;
    protected $table = 'master_banks';
    protected $primaryKey = 'id';
    protected $fillable = [
        'country_code',
        'name', 
        'description',
        'public',
        'logo_path',
        'bank_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
