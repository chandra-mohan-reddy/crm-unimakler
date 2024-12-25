<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Models\FranchiseModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
use Illuminate\Support\Facades\Hash;
use DB;

class FranchiseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = FranchiseModel::where( 'deleted_status', '=', 'I' )->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Franchise');
        $response['data'] = $data;
        return response()->json($response, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rules = [
            'franchise_name'                => 'required|htmltags',
            'franchise_territory'           => 'required|htmltags',
            'franchise_description'         => 'required|htmltags',
            'franchise_primary_email'       => 'required|htmltags',
            'franchise_secondary_email'     => 'nullable|htmltags',
            'franchise_primary_phoneno'     => 'required|htmltags',
            'franchise_secondary_phoneno'   => 'nullable|htmltags',
            'franchise_country'             => 'required|htmltags',
            'franchise_state'               => 'required|htmltags',
            'franchise_city'                => 'required|htmltags',
            'franchise_location'            => 'required|htmltags',
            'franchise_address'             => 'required|htmltags',
            'franchise_pan_card'            => 'required|htmltags',
            'franchise_gst_number'          => 'required|htmltags',
            'contact_person'                => 'required|htmltags',
            'contact_gender'                => 'required|htmltags',
            'contact_dob'                   => 'required|htmltags',
            'contact_primary_phone'         => 'required|htmltags',
            'contact_secondary_phone'       => 'nullable|htmltags',
            'contact_residential_address'   => 'nullable|htmltags',
            'username'                      => 'required|htmltags',
            'password'              => 'required|password_validator|one_uppercase|one_lowercase|one_digit|one_special_symbol',
            'aadhar_number'         => 'required|htmltags',
            'pan_card'              => 'required|htmltags',
            'status'                => 'required|htmltags',
        ];
        $niceNames = [
            'franchise_name'   => 'Franchise Name',
        ];
        $validator = Validator::make( $request->all(), $rules );
        $validator->setAttributeNames( $niceNames );

        if ( $validator->fails() ) {
            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
            exit();
        }
        $storeData = new FranchiseModel;

        $storeData->franchise_name                  = $request->franchise_name;
        $storeData->franchise_territory             = $request->franchise_territory;
        $storeData->franchise_description           = $request->franchise_description;
        $storeData->franchise_primary_email         = $request->franchise_primary_email;
        $storeData->franchise_secondary_email       = $request->franchise_secondary_email;
        $storeData->franchise_primary_phoneno       = $request->franchise_primary_phoneno;
        $storeData->franchise_secondary_phoneno     = $request->franchise_secondary_phoneno;
        $storeData->franchise_country               = $request->franchise_country;
        $storeData->franchise_state                 = $request->franchise_state;
        $storeData->franchise_city                  = $request->franchise_city;
        $storeData->franchise_location              = $request->franchise_location;
        $storeData->franchise_address               = $request->franchise_address;
        $storeData->franchise_pan_card              = $request->franchise_pan_card;
        $storeData->franchise_gst_number            = $request->franchise_gst_number;
        $storeData->contact_person                  = $request->contact_person;
        $storeData->contact_gender                  = $request->contact_gender;
        $storeData->contact_dob                     = $request->contact_dob;
        $storeData->contact_primary_phone           = $request->contact_primary_phone;
        $storeData->contact_secondary_phone         = $request->contact_secondary_phone;
        $storeData->contact_residential_address     = $request->contact_residential_address;
        $storeData->username                        = $request->username;
        $storeData->password                        = Hash::make($request->password);
        $storeData->aadhar_number                   = $request->aadhar_number;
        $storeData->pan_card                        = $request->pan_card;
        $storeData->status                          = $request->status;
        $storeData->created_date                    = Carbon::now();

        if ( $storeData->save() ) {
            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Franchise details are stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
