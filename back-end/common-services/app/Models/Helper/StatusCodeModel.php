<?php

namespace App\Models\Helper;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusCodeModel extends Model
{
    use HasFactory;
    protected $table = 'master_status_code';
    protected $primaryKey  = 'status_code_id';
}
