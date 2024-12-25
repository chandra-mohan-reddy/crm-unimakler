<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StateModel extends Model
{
    use HasFactory;
    protected $table = 'master_states';
    protected $primaryKey = 'id';
    protected $fillable = [
        'state_name',
        'state_code',
        'country_code'
    ];
    public $timestamps = false;
}
