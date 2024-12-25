<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BHKSizesModel extends Model
{
    use HasFactory;

    protected $table = 'master_bhk_sizes';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'description',
        'bhk_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
