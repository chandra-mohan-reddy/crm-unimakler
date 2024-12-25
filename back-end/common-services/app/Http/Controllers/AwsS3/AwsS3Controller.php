<?php

namespace App\Http\Controllers\AwsS3;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Carbon\Carbon;
use App\Helpers\StatusCode;
use Aws\S3\S3Client;

use Intervention\Image\ImageManagerStatic as Image;

class AwsS3Controller extends Controller
{

    public function uploadfile(Request $request){

        // Check S3 connection before proceeding with file upload
        if (!$this->checkS3Connection()) {
            $response = StatusCode::getStatusCodeData(500, 'S3 connection', 'S3 connection not working. please contact admin.');
            return response()->json($response, 500);
        }

        $validator = Validator::make($request->all(), [
            'file' => 'required|file|mimes:jpeg,png,pdf|max:5000', // 5MB
        ]);

        if ($validator->fails()) {
            $response =  StatusCode::getStatusCodeData(422, 'Error', $validator->errors());
            return response()->json($response, 200);
        }

        // Upload the original image to S3
        $originalPath = $request->file('file')->store('', 's3', 'public');

        // Create a thumbnail from the original image
        $thumbnail = Image::make($request->file('file'))->resize(100, 100);

        $thumbnailPath = 'thumbs/' . pathinfo($originalPath, PATHINFO_FILENAME) . '_thumb.' . $request->file('file')->getClientOriginalExtension();
        Storage::disk('s3')->put($thumbnailPath, (string)$thumbnail->encode());

        // Generate URLs for both the original and thumbnail images
        $originalUrl = Storage::disk('s3')->url($originalPath);
        $thumbnailUrl = Storage::disk('s3')->url($thumbnailPath);

        $response = StatusCode::getStatusCodeData(200, 'Uploaded', "File and thumbnail uploaded into server");
        $response['original_image_url'] = $originalUrl;
        $response['thumbnail_image_url'] = $thumbnailUrl;

        return response()->json($response, 200);
    }

    public function getFile(Request $request){

        // Check S3 connection before proceeding with file upload
        if (!$this->checkS3Connection()) {
            $response = StatusCode::getStatusCodeData(500, 'S3 connection', 'S3 connection not working. please contact admin.');
            return response()->json($response, 500);
        }

        $s3Url = $request->input('s3_file_url');

        if (!$request->has('s3_file_url')) {
            $response =  StatusCode::getStatusCodeData(400, 'Not found', "S3 URL not provided");
            return response()->json($response, 400);
        }

        // Initialize the S3 client
        $s3Client = new S3Client([
            'version' => 'latest',
            'region' => env('AWS_DEFAULT_REGION'),
            'credentials' => [
                'key' => env('AWS_ACCESS_KEY_ID'),
                'secret' => env('AWS_SECRET_ACCESS_KEY'),
            ],
        ]);

        // Parse the S3 URL to extract the bucket and object key
        $urlParts = parse_url($s3Url);
        $bucket = env('AWS_BUCKET');
        $objectKey = ltrim($urlParts['path'], '/');

        if (!$s3Client->doesObjectExist($bucket, $objectKey)) {
            $response =  StatusCode::getStatusCodeData(404, 'Not found file', "File not found in S3");
            return response()->json($response, 404);
        }

        // Get the object from S3
        $result = $s3Client->getObject([
            'Bucket' => $bucket,
            'Key' => $objectKey,
        ]);

        // Stream the S3 object content as the response
        return response($result['Body'], 200)
            ->header('Content-Type', $result['ContentType'])
            ->header('Content-Disposition', 'inline; filename=' . $result['Key']);

    }

    public function removeFile(Request $request){

        // Check S3 connection before proceeding with file upload
        if (!$this->checkS3Connection()) {
            $response = StatusCode::getStatusCodeData(500, 'S3 connection', 'S3 connection not working. please contact admin.');
            return response()->json($response, 500);
        }

        if (!$request->has('s3_file_url')) {
            $response =  StatusCode::getStatusCodeData(400, 'Not found file', "S3 URL not provided");
            return response()->json($response, 400);
        }

        $s3Url = $request->input('s3_file_url');

        $s3Client = new S3Client([
            'version' => 'latest',
            'region' => env('AWS_DEFAULT_REGION'),
            'credentials' => [
                'key' => env('AWS_ACCESS_KEY_ID'),
                'secret' => env('AWS_SECRET_ACCESS_KEY'),
            ],
        ]);

        // Parse the S3 URL to extract the bucket and object key
        $urlParts = parse_url($s3Url);
        $bucket = env('AWS_BUCKET');
        $objectKey = ltrim($urlParts['path'], '/');

        // Check if the object exists in S3
        if (!$s3Client->doesObjectExist($bucket, $objectKey)) {
            $response =  StatusCode::getStatusCodeData(404, 'Not found', "File not found in S3");
            return response()->json($response, 404);
        }

        // Delete the object from S3
        $s3Client->deleteObject([
            'Bucket' => $bucket,
            'Key' => $objectKey,
        ]);

        $response =  StatusCode::getStatusCodeData(200, 'Deleted', "File deleted from S3");
        return response()->json($response, 200);

    }

    private function checkS3Connection(){
        try {
            $s3Client = new S3Client([
                'version' => 'latest',
                'region' => env('AWS_DEFAULT_REGION'),
                'credentials' => [
                    'key' => env('AWS_ACCESS_KEY_ID'),
                    'secret' => env('AWS_SECRET_ACCESS_KEY'),
                ],
            ]);

            // Attempt to list objects in the bucket (replace 'your-bucket' with your actual bucket name)
            $s3Client->listObjectsV2(['Bucket' => env('AWS_BUCKET')]);

            // If no exception is thrown, the connection is working
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }




}
