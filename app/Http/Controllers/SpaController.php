<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function index(Request $request)
    {
        
        if($request->path() === '/login'){
            return view('auth.login');
        }
        return view('app');
    }
}
