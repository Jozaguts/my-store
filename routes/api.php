<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => '/products'], function () {
    Route::post('', 'ProductController@create')->middleware('auth:api');
    Route::put('', 'ProductController@update')->middleware('auth:api');
    Route::delete('/delete/{id}', 'ProductController@delete')->middleware('auth:api');
    Route::get('/{page?}', 'ProductController@index');
});
Route::group(['prefix' => '/users'], function () {
    Route::get('/', 'UserController@index')->middleware('auth:api');
    Route::post('/', 'UserController@create')->middleware('auth:api');
    Route::put('/', 'UserController@update')->middleware('auth:api');
    Route::delete('/delete/{id}', 'UserController@delete')->middleware('auth:api');
});
