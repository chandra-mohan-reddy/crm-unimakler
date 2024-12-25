<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        Validator::extend('htmltags', function ($attribute, $value, $parameters, $validator) {
            return $value == trim(strip_tags($value));
        });

        Validator::extend('name', function ($attribute, $value) {
            return preg_match("/^\d*[a-zA-Z \'\.\-]{2,30}$/", $value);
        });

        Validator::extend('email_address', function ($attribute, $value) {
            return filter_var($value, FILTER_VALIDATE_EMAIL);
        });

        Validator::extend('alpha_spaces', function ($attribute, $value) {
            return preg_match('/^[\pL\s]+$/u', $value);
        });
        Validator::extend('one_uppercase', function ($attribute, $value) {
            return preg_match('/^(?=.*?[A-Z])/', $value);
        });
        Validator::extend('one_lowercase', function ($attribute, $value) {
            return preg_match('/^(?=.*?[a-z])/', $value);
        });
        Validator::extend('one_digit', function ($attribute, $value) {
            return preg_match('/^(?=.*?[0-9])/', $value);
        });
        Validator::extend('one_special_symbol', function ($attribute, $value) {
            return preg_match('/[@$!%*#?&]/', $value);
        });
        Validator::extend('password_validator', function ($attribute, $value) {
            return preg_match("/^\d*[a-zA-Z0-9\'\.\-\_\@\#\!\$\%\^\&\*\(\)]{8,50}$/", $value);
        });
    }
}
