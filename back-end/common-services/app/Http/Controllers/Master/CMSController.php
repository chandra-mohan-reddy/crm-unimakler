<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Master\CMSModel;
use Carbon\Carbon;
use App\Helpers\StatusCode;

class CMSController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = CMSModel::where('page_status', '=', 'A')->get();

        $response =  StatusCode::getStatusCodeData(200, 'LIST', 'CMS pages');
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
            'name'              => 'required',
            'description'       => 'required',
            'content'           => 'required',
            'permalink'         => 'required',
            'meta_title'        => 'required',
            'meta_keywords'     => 'required',
            'meta_description'  => 'required',
            'meta_image'        => 'required',
            'page_status'       => 'required',
            'position'          => 'required',
            'created_by'        => 'required',
            'created_ip'        => 'required'
        ];

        $niceNames = [
            'name' => 'page title',
            'description' => 'page description',
            'content' => 'page content',
            'permalink' => 'permalink',
            'meta_title' => 'meta title',
            'meta_keywords' => 'meta keywords',
            'meta_description' => 'meta description',
            'meta_image' => 'meta image',
            'page_status' => 'status',
            'position' => 'position',
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


        $storeData = new CMSModel;
        $storeData->name                = $request->name;
        $storeData->description         = $request->description;
        $storeData->content             = $request->content;
        $storeData->permalink           = $request->permalink;
        $storeData->meta_title          = $request->meta_title;
        $storeData->meta_keywords       = $request->meta_keywords;
        $storeData->meta_description    = $request->meta_description;
        $storeData->meta_image          = $request->meta_image;
        $storeData->page_status         = $request->page_status;
        $storeData->position            = $request->position;
        $storeData->created_by          = $request->created_by;
        $storeData->created_date        = Carbon::now();
        $storeData->created_ip          = $request->created_ip;
        

        if ($storeData->save()) {
            //echo json_encode(array("message" => "Page stored!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Page stored!');
            $response['data'] = $storeData;
            return response()->json($response, 200);
        } else {
            //echo json_encode(array("message" => "Page not stored!" ));
         
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
        $result = CMSModel::where('page_status', '=', 'A')
            ->where('id', '=', $id)
            ->first();
       // return $result;

        if ( !$result ) {

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'CMS page not found!');
            return response()->json($response, 200);
        } else {
            $response =  StatusCode::getStatusCodeData(200, 'READ', 'CMS page details');
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
            'name'              => 'required',
            'description'       => 'required',
            'content'           => 'required',
            'permalink'         => 'required',
            'meta_title'        => 'required',
            'meta_keywords'     => 'required',
            'meta_description'  => 'required',
            'meta_image'        => 'required',
            'page_status'       => 'required',
            'position'          => 'required',
            'updated_by'        => 'required',
            'updated_ip'        => 'required'
        ];

        $niceNames = [
            'name' => 'page title',
            'description' => 'page description',
            'content' => 'page content',
            'permalink' => 'permalink',
            'meta_title' => 'meta title',
            'meta_keywords' => 'meta keywords',
            'meta_description' => 'meta description',
            'meta_image' => 'meta image',
            'page_status' => 'status',
            'position' => 'position',
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
        $page = CMSModel::find($id);

        if (!$page) {
            // Handle the case where the page with the given ID was not found
            //echo json_encode(array("message" => "Page not found!"));
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Page not found!');
            return response()->json($response, 200);
        }

        $page->name                = $request->name;
        $page->description         = $request->description;
        $page->content             = $request->content;
        $page->permalink           = $request->permalink;
        $page->meta_title          = $request->meta_title;
        $page->meta_keywords       = $request->meta_keywords;
        $page->meta_description    = $request->meta_description;
        $page->meta_image          = $request->meta_image;
        $page->page_status         = $request->page_status;
        $page->position            = $request->position;
        $page->updated_by          = $request->updated_by;
        $page->updated_date        = Carbon::now();
        $page->updated_ip          = $request->updated_ip;
        

        if ($page->save()) {
            //echo json_encode(array("message" => "Page updated!" ));
         
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'CREATE', 'Page updated!');
            $response['data'] = $page;
            return response()->json($response, 200);

        } else {
            //echo json_encode(array("message" => "Page not updated!" ));
         
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
       // Delete the specified CMS page
       $page = CMSModel::where('id', '=', $id)->first();
       if (!$page) {
           // Handle the case where the page with the given ID was not found
           //echo json_encode(array("message" => "Page not found!"));
          // exit();

          $response =  StatusCode::getStatusCodeData(200, 'EMPTY', 'Page not found!');
          return response()->json($response, 200);
       }


       if ($page->delete()) {
            //echo json_encode(array("message" => "Page deleted!" ));
     
            //exit();

            $response =  StatusCode::getStatusCodeData(200, 'DELETE', 'Page deleted!');
            return response()->json($response, 200);

        } else {
            //echo json_encode(array("message" => "Page not deleted!" ));
        
           // exit();
           $response =  StatusCode::getStatusCodeData(500);
            return response()->json($response, 500);
        }
    }
}
