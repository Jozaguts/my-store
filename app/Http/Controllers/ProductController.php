<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProduct;
use App\Http\Requests\UpdateProduct;
use Illuminate\Http\Request;
use App\Product;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index(Request $request)
    {

        try {
            $products = Product::paginate(9, ['id', 'name', 'slug', 'description', 'price', 'status'], 'page', $request->page);

            return  $this->getMedia($products);
        } catch (\Throwable $th) {
            return response()->json(['error', $th->getMessage()], 400);
        }
    }
    public function getMedia($model)
    {
        foreach ($model as $product) {
            $newsItem = Product::find($product->id);
            $mediaItems = $newsItem->getMedia();
            $publicUrl = $mediaItems[0]->getFullUrl();
            $product['publicUrl'] = $publicUrl;
        }
        return response()->json(
            [
                'paginate' => [
                    'total' => $model->total(),
                    'current_page' => $model->currentPage(),
                    'per_page' => $model->perPage(),
                    'last_page' => $model->lastPage(),
                    'from' => $model->firstItem(),
                    'to' => $model->lastPage(),
                ],
                'products' => $model,
            ],
            200
        );




        return $model;
    }
    public function sendFirstPage()
    {
        try {
            $products = Product::paginate(9, ['id', 'name', 'slug', 'description', 'price', 'status'], 'page', '1');
            return  $this->getMedia($products);
        } catch (\Throwable $th) {
            return response()->json(['error', $th->getMessage()], 400);
        }
    }
    public function create(CreateProduct $request)
    {

        try {
            DB::table('products')
                ->insert($request->except(['image']));

            $productId = DB::getPdo()->lastInsertId();

            $product = Product::find($productId);

            $product->addMedia($request->image)->toMediaCollection();
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
    public function delete($id)
    {
        try {
            $product = Product::find($id);
            $product->delete();
            return $this->sendFirstPage();
        } catch (\Throwable $th) {
            return response()->json(['errors' => $th->getMessage()], 400);
        }
    }
}
