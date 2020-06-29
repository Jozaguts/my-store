<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        
        try {
            $products = Product::paginate(9, ['id', 'name', 'slug', 'description', 'price', 'status'],'page',$request->page);
            return response()->json(
                [
                    'paginate' => [
                        'total' => $products->total(),
                        'current_page' => $products->currentPage(),
                        'per_page' => $products->perPage(),
                        'last_page' => $products->lastPage(),
                        'from' => $products->firstItem(),
                        'to' => $products->lastPage(),
                    ],
                    'products' => $products
                ],
                200
            );
        } catch (\Throwable $th) {
            return response()->json(['error', $th->getMessage()], 400);
        }
    }
}
