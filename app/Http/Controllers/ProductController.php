<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProduct;
use App\Http\Requests\UpdateProduct;
use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    public function index(Request $request)
    {

        try {
            $products = Product::paginate(9, ['id', 'name', 'slug', 'description', 'price', 'status'], 'page', $request->page);
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
    public function sendFirstPage()
    {
        try {
            $products = Product::paginate(9, ['id', 'name', 'slug', 'description', 'price', 'status'], 'page', '1');
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
    public function create(CreateProduct $request)
    {
        try {
            Product::create($request->all())->save();
            return $this->sendFirstPage();
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }
    public function update(UpdateProduct $request)
    {
        try {
            $product = Product::find($request->id);
          
            if ($product->slug === $request->slug) {
                $product->update($request->except(['id', 'slug']));
            } else {
                $product->update($request->except(['id']));
            }
            return $this->sendFirstPage();
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }
    // public function delete($id)
    // {
    //     try {
    //         $user = User::find($id);
    //         $user->delete();
    //         return $this->index();
    //     } catch (\Throwable $th) {
    //         return response()->json(['errors' => $th->getMessage()], 400);
    //     }
    // }
}
