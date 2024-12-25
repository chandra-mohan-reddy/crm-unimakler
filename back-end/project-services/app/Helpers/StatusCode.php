<?php

namespace App\Helpers;

use App\Models\Helper\StatusCodeModel;
use App\Models\Helper\ResponseMessageModel;


class StatusCode
{
    public static function getStatusCodeData($code=NULL,$operation=NULL,$attribute=NULL)
    {
        if(!$code){
            return "code is required";
        }
        $language = config('app.locale');
        $where = array(
            'code'       =>  $code,
            'lang'       =>  $language
        );

        $statusData = StatusCodeModel::where($where)->first();
        if(empty($statusData)){
            return null;
        }
        if(($code == 200 || $code == 401 ) && $operation){
            $where = array(
                'code'       =>  $code,
                'lang'       =>  $language
            );
            $responseMessage = ResponseMessageModel::where($where)->where('operation',$operation)->orWhere('module',$operation)->first();
            if($responseMessage){
                $message = $responseMessage->message;
                if($attribute){
                    $statusData->message = str_replace(':attribute',$attribute,$message);
                }else{
                    $statusData->message = $message;
                }
            }else{
                $statusData->message = $attribute;
            }
        }
        return array(
                    'code' => $statusData->code,
                    'status' => $statusData->status,
                    'type' => $statusData->type,
                    'message' => $statusData->message,
               );
    }


}
