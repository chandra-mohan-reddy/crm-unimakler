<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FranchiseModel extends Model
{
    use HasFactory;
    protected $table = 'franchise';
    protected $primaryKey = 'franchise_id';
    protected $fillable = [
        "franchise_name",
        "franchise_address",
        "franchise_description",
        "franchise_contact_person",
        "franchise_primary_email",
        "franchise_secondary_email",
        "franchise_primary_phoneno",
        "franchise_secondary_phoneno",
        "franchise_state",
        "franchise_city",
        "franchise_location",
        "franchise_image_file_name",
        "franchise_image_file_type",
        "franchise_image_file_path",
        "franchise_image_full_path",
        "franchise_image_original_name",
        "franchise_image_file_size",
        "franchise_image_auto_name",
        "franchise_image_full_json",
        "display",
        "status",
        "deleted_status",
        "created_by",
        "created_date",
        "created_ip",
        "updated_by",
        "updated_date",
        "updated_ip"
    ];
    public $timestamps = false;
    protected $hidden = [
        'created_ip',
        'updated_ip',
    ];
}
