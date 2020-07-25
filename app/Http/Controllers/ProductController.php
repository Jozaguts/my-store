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
        $items = $request->get('items');
        $page = $request->get('page');

        try {

            $products = $this->paginate($items, $page);

            $this->getImageOfEachItem($products);

            return response()->json(['data' => $products], 200);

        } catch (\Throwable $th) {

            return response()->json(['error', $th->getMessage()], 400);

        }
    }

    public function getImageOfEachItem($items)
    {
        foreach ($items as $item) {
            $productItem = Product::find($item->id);
            $mediaItems = $productItem->getMedia();
            if (count($mediaItems) > 0) {
                $item['publicUrl'] = $mediaItems[0]->getFullUrl();
            }
        }

        return $items;

    }

    public function paginate($items, $page)
    {
        try {
            return Product::paginate($items, ['id', 'name', 'slug', 'description', 'price', 'status', 'stock'], 'page', $page);
        } catch (\Throwable $th) {
            return response()->json(['error', $th->getMessage()], 400);
        }
    }

    public function store(CreateProduct $request)
    {
        $productData = $request->except(['image']);
        $image = $request->file('image');
        try {
            Product::create($productData)
                ->addMedia($image)
                ->toMediaCollection();
            $products = $this->paginate(9, 1);
            $this->getImageOfEachItem($products);
            return response()->json(['data' => $products], 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function update(UpdateProduct $request, $id)
    {
        $productData = $request->except(['_method', 'image']);
        $image = $request->file('image');
        try {
            $product = Product::find($id);
            if ($image) {
                $mediaItems = $product->getMedia();
                $mediaItems[0]->delete();
                $product->addMedia($image)->toMediaCollection();
            }
            $product->update($productData);
            $products = $this->paginate(9, 1);
            $this->getImageOfEachItem($products);
            return response()->json(['data' => $products], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function delete($id)
    {
        try {
            $product = Product::find($id);
            $product->delete();
            $products = $this->paginate(9, 1);
            $this->getImageOfEachItem($products);
            return response()->json(['data' => $products], 200);
        } catch (\Throwable $th) {
            return response()->json(['errors' => $th->getMessage()], 400);
        }
    }


}
