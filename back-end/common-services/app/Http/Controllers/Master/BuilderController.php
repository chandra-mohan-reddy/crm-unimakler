<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\BuilderModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;
class BuilderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = BuilderModel::where('builder_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Builder');
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
            'headoffice_location'       => 'required',
            'md_name'                   => 'required',
            'md_phone_number'           => 'required',
            'cp_manager_name'           => 'required',
            'cp_manager_phone_number'   => 'required',
            'sales_manager_name'        => 'required',
            'sales_manager_phone_number'=> 'required',
            'slug'                      => 'required',
            'order'                     => 'required',
            'logo_path'                 => 'required',
            'builder_status'            => 'required',
            'created_by'                => 'required',
            'created_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'builder name',
            'headoffice_location' => 'head office location',
            'md_name' => 'managing director',
            'md_phone_number' => 'managing director phone number',
            'cp_manager_name' => 'CP managing director',
            'cp_manager_phone_number' => 'CP managing director phone number',
            'sales_manager_name' => 'sales manager',
            'sales_manager_phone_number' => 'sales manager phone number',
            'slug' => 'slug',
            'order' => 'order',
            'logo_path' => 'logo',
            'builder_status' => 'status',
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

        $storeData = new BuilderModel;
        $storeData->name                        = $request->name;
        $storeData->headoffice_location         = $request->headoffice_location;
        $storeData->md_name                     = $request->md_name;
        $storeData->md_phone_number             = $request->md_phone_number;
        $storeData->cp_manager_name             = $request->cp_manager_name;
        $storeData->cp_manager_phone_number     = $request->cp_manager_phone_number;
        $storeData->sales_manager_name          = $request->sales_manager_name;
        $storeData->sales_manager_phone_number  = $request->sales_manager_phone_number;
        $storeData->slug                        = $request->slug;
        $storeData->order                       = $request->order;
        $storeData->logo_path                   = $request->logo_path;
        $storeData->builder_status              = $request->builder_status;
        $storeData->created_by                  = $request->created_by;
        $storeData->created_date                = Carbon::now();
        $storeData->created_ip                  = $request->created_ip;
        

        if ($storeData->save()) {
            //echo json_encode(array("message" => "Builder stored!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Builder stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Builder not stored!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $result = BuilderModel::where('builder_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();
        //return $result;

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Builder not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Builder details');
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
            'headoffice_location'       => 'required',
            'md_name'                   => 'required',
            'md_phone_number'           => 'required',
            'cp_manager_name'           => 'required',
            'cp_manager_phone_number'   => 'required',
            'sales_manager_name'        => 'required',
            'sales_manager_phone_number'=> 'required',
            'slug'                      => 'required',
            'order'                     => 'required',
            'logo_path'                 => 'required',
            'builder_status'            => 'required',
            'updated_by'                => 'required',
            'updated_ip'                => 'required'
        ];

        $niceNames = [
            'name' => 'builder name',
            'headoffice_location' => 'head office location',
            'md_name' => 'managing director',
            'md_phone_number' => 'managing director phone number',
            'cp_manager_name' => 'CP managing director',
            'cp_manager_phone_number' => 'CP managing director phone number',
            'sales_manager_name' => 'sales manager',
            'sales_manager_phone_number' => 'sales manager phone number',
            'slug' => 'slug',
            'order' => 'order',
            'logo_path' => 'logo',
            'builder_status' => 'status',
            'updated_by' => 'updated by',
            'updated_ip' => 'updated ip',
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

        // Find the record in the database by its ID
        $builder = BuilderModel::find($id);

        if (!$builder) {
            // Handle the case where the page with the given ID was not found
            // echo json_encode(array("message" => "builder not found!"));
            // exit();

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Builder not found!');
            return response()->json($response, 200);
        }

        $builder->name                        = $request->name;
        $builder->headoffice_location         = $request->headoffice_location;
        $builder->md_name                     = $request->md_name;
        $builder->md_phone_number             = $request->md_phone_number;
        $builder->cp_manager_name             = $request->cp_manager_name;
        $builder->cp_manager_phone_number     = $request->cp_manager_phone_number;
        $builder->sales_manager_name          = $request->sales_manager_name;
        $builder->sales_manager_phone_number  = $request->sales_manager_phone_number;
        $builder->slug                        = $request->slug;
        $builder->order                       = $request->order;
        $builder->logo_path                   = $request->logo_path;
        $builder->builder_status              = $request->builder_status;
        $builder->updated_by                  = $request->updated_by;
        $builder->updated_date                = Carbon::now();
        $builder->updated_ip                  = $request->updated_ip;
        

        if ($builder->save()) {
            //echo json_encode(array("message" => "Builder updated!" ));
         
            //exit();

            //$response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Builder updated!');
            $response['data'] = $builder;
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Builder not updated!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         // Delete the specified Builder 
       $builder = BuilderModel::find($id);
       if (!$builder) {
           // Handle the case where the page with the given ID was not found
           //echo json_encode(array("message" => "Builder not found!"));
           //exit();

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Builder not found!');
           return response()->json($response, 200);
       }


       if ($builder->delete()) {
            //echo json_encode(array("message" => "Builder deleted!" ));
     
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Builder deleted!');
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Builder not deleted!" ));
        
            //exit();
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
