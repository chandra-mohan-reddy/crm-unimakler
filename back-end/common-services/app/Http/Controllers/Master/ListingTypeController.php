<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\ListingTypeModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class ListingTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ListingTypeModel::where('listing_type_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Listing Type');
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
            'name'                      => 'required',
            'description'               => 'required',
            'slug'                      => 'required',
            'order'                     => 'required',
            'listing_type_status'       => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'slug' => 'slug',
            'order' => 'order',
            'listing_type_status' => 'status',
            'created_by' => 'created by',
            'created_ip' => 'created ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
          //echo json_encode($validator->errors());
         
           // exit();

           $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);
        }

        $storeData = new ListingTypeModel;
        $storeData->name                        = $request->name;
        $storeData->description                 = $request->description;
        $storeData->slug                        = $request->slug;
        $storeData->order                       = $request->order;
        $storeData->listing_type_status         = $request->listing_type_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
           // echo json_encode(array("message" => "Listing type stored!" ));
         
           // exit();

           $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Listing type stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            // echo json_encode(array("message" => "Listing type not stored!" ));
         
            // exit();

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $result = ListingTypeModel::where('listing_type_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();
        // return $result;

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing type not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Listing type details');
            $response['data'] = $result;
            return response()->json($response, 200);
        }
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
        $rules = [
            'name'                      => 'required',
            'description'               => 'required',
            'slug'                      => 'required',
            'order'                     => 'required',
            'listing_type_status'       => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'slug' => 'slug',
            'order' => 'order',
            'listing_type_status' => 'status',
            'updated_by' => 'updated by',
            'updated_ip' => 'updated ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {
           // echo json_encode($validator->errors());
         
           // exit();

           $response = StatusCode::getStatusCodeData(422);
           $response['data'] = $validator->errors();
           return response()->json($response, 422);
        }

         // Find the record in the database by its ID
         $listingType = ListingTypeModel::find($id);

         if (!$listingType) {
             // Handle the case where the page with the given ID was not found
             // echo json_encode(array("message" => "Listing type not found!"));
             // exit();

             $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing type not found!');
             return response()->json($response, 200);
         }


        $listingType->name                        = $request->name;
        $listingType->description                 = $request->description;
        $listingType->slug                        = $request->slug;
        $listingType->order                       = $request->order;
        $listingType->listing_type_status         = $request->listing_type_status;
        $listingType->updated_by                  = $request->updated_by;
        $listingType->updated_date                = Carbon::now();
        $listingType->updated_ip                  = $request->updated_ip;
        

        if ($listingType->save()) {
            // echo json_encode(array("message" => "Listing type updated!" ));
         
            // exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Listing type updated!');
            $response['data'] = $listingType;
            return response()->json($response, 200);
        } else {
            // echo json_encode(array("message" => "Listing type not updated!" ));
         
            // exit();
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         // Delete the specified Listing Type 
       $listingType = ListingTypeModel::find($id);
       if (!$listingType) {
           // Handle the case where the page with the given ID was not found
           // echo json_encode(array("message" => "Listing type not found!"));
           // exit();
           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Listing type not found!');
           return response()->json($response, 200);
       }


       if ($listingType->delete()) {
            // echo json_encode(array("message" => "Listing type deleted!" ));
     
            // exit();

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Listing type deleted!');
            return response()->json($response, 200);
        } else {
            // echo json_encode(array("message" => "Listing type not deleted!" ));
        
            // exit();

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
