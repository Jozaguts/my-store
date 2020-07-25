<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSale;
use App\Sale;


class SalesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only('delete');
    }

    public function store(StoreSale $request)
    {
        try {
            Sale::create($request->all());
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), '400');
        }
    }
}
