<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\SaleableAreaModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class SaleableAreaController extends Controller
{
   /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = SaleableAreaModel::where('saleable_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'Saleable area representation');
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
            'name'   => 'required',
            'description'  => 'required',
            'saleable_status'  => 'required',
            'created_by'   => 'required',
            'created_ip'   => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'saleable_status' => 'status',
            'created_by' => 'created by',
            'created_ip' => 'created ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {

            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);

        }

        $storeData = new SaleableAreaModel;
        $storeData->name                = $request->name;
        $storeData->description         = $request->description;
        $storeData->saleable_status     = $request->saleable_status;
        $storeData->created_by          = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;
        
        if ($storeData->save()) {

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Saleable area representation stored!');
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
        $result = SaleableAreaModel::where('saleable_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Saleable area representation not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'Saleable area representation details');
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
            'name'                  => 'required',
            'description'           => 'required',
            'saleable_status'      => 'required',
            'updated_by'            => 'required',
            'updated_ip'            => 'required'
        ];

        $niceNames = [
            'name' => 'name',
            'description' => 'description',
            'saleable_status' => 'status',
            'updated_by' => 'updated by',
            'updated_ip' => 'updated ip',
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->setAttributeNames($niceNames);

        if ($validator->fails()) {

            $response = StatusCode::getStatusCodeData(422);
            $response['data'] = $validator->errors();
            return response()->json($response, 422);

        }

        // Find the record in the database by its ID
        $saleableArea= SaleableAreaModel::find($id);

        if (!$saleableArea) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Saleable area representation not found!');
            return response()->json($response, 200);
        }
        $saleableArea->name               = $request->name;
        $saleableArea->description        = $request->description;
        $saleableArea->saleable_status    = $request->saleable_status;
        $saleableArea->updated_by         = $request->updated_by;
        $saleableArea->updated_date       = Carbon::now();
        $saleableArea->updated_ip         = $request->updated_ip;
        

        if ($saleableArea->save()) {

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Saleable area representation updated!');
            $response['data'] = $saleableArea;
            return response()->json($response, 200);

        } else {

            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $saleableArea = SaleableAreaModel::find($id);
       if (!$saleableArea) {

           $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Saleable area representation not found!');
           return response()->json($response, 200);

       }

       if ($saleableArea->delete()) {

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Saleable area representation deleted!');
            return response()->json($response, 200);

        } else {
            $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
