<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApprovalStatusModel extends Model
{
    use HasFactory;

    protected $table = 'master_approval_status';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name', 
        'description',
        'approval_status'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
