<?php

namespace App\Models\Helper;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResponseMessageModel extends Model
{
    use HasFactory;
    protected $table = 'master_response_message';
    protected $primaryKey  = 'message_id';
}
