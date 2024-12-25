<?php

namespace App\Models\Helper;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MasterHistoryModel extends Model
{
    use HasFactory;
    protected $table = 'mastertable_update_history';
    protected $primaryKey  = 'id';
    protected $hidden = ['deleted_flag', 'created_at', 'updated_at', 'ip_address'];
}
