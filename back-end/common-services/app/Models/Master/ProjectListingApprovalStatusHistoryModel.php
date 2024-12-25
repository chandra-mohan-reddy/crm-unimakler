<?php

namespace App\Models\Master;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectListingApprovalStatusHistoryModel extends Model
{
    use HasFactory;

    protected $table = 'project_listing_approval_status_history';
    protected $primaryKey = 'id';
    protected $fillable = [
        'project_listing_id', 
        'approval_status_id',
        'record_status',
        'created_by_type',
        'updated_by_type'
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];

}
