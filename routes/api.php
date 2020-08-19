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
    Route::post('/store', 'ProductController@store')->middleware('auth:api');
    Route::put('/update/{id}', 'ProductController@update')->middleware('auth:api');
    Route::delete('/delete/{id}', 'ProductController@delete')->middleware('auth:api');
    Route::get('/{page?}{items?}', 'ProductController@index');
});

Route::apiResources(['/sales' => 'SalesController']);

Route::group(['prefix' => '/users'], function () {
    Route::get('/index', 'UserController@index')->middleware('auth:api');
    Route::post('/store', 'UserController@store')->middleware('auth:api');
    Route::put('/update', 'UserController@update')->middleware('auth:api');
    Route::delete('/delete/{id}', 'UserController@delete')->middleware('auth:api');
    Route::get('/{id}', 'UserController@currentUser')->middleware('auth:api');
});

Route::post('/payment', 'CheckOutController@payment');
Route::post('/client-intent', 'CheckOutController@clientIntent');
