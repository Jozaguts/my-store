<?php

namespace App\Repositories\Products;

use App\DTOs\ProductDTO;
use App\Product;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Psy\Exception\ThrowUpException;


class Repository implements RepositoryInterface
{
    protected $model;

    public function __construct(Product $product)
    {
        $this->model = $product;
    }

    public function all()
    {
        $this->model->all();
    }

    public function create(object $data)
    {
        $this->model->create([
            'stock' => $data->getStock(),
            'name' => $data->getName(),
            'slug' => $data->getSlug(),
            'description' => $data->getDescription(),
            'price' => $data->getPrice(),
            'status' => $data->isStatus()
        ])
            ->addMedia($data->getImage())
            ->toMediaCollection();

        return true;
    }

    public function update(object $data, $id)
    {
        try {
            $product = $this->model->where('id', $id)
                ->update([
                    'stock' => $data->getStock(),
                    'name' => $data->getName(),
                    'slug' => $data->getSlug(),
                    'description' => $data->getDescription(),
                    'price' => $data->getPrice(),
                    'status' => $data->isStatus()
                ]);

            if ($data->getImage()) {
                $mediaItems = $product->getMedia();
                $mediaItems[0]->delete();
                $product->addMedia($data->getImage())->toMediaCollection();
            }
            return true;

        } catch (ThrowUpException $exception) {
            return $exception->getMessage();
        }
    }

    public function find($id)
    {
        if (null == $product = $this->model->find($id)) {
            throw new ModelNotFoundException("Product not found");
        }
        return $product;
    }

    public function delete($id)
    {
        return $this->model->destroy($id);
    }

    public function paginate($items, $page): object
    {
        try {
            return $this->model->paginate($items, ['id', 'name', 'slug', 'description', 'price', 'status', 'stock'], 'page', $page);
        } catch (\Throwable $th) {
            return response()->json(['error', $th->getMessage()], 400);
        }
    }

    public function getImageOfEachItem($items): object
    {
        foreach ($items as $item) {
            $productItem = $this->find($item->id);
            $mediaItems = $productItem->getMedia();
            if (count($mediaItems) > 0) {
                $item['publicUrl'] = $mediaItems[0]->getFullUrl();
            }
        }

        return $items;

    }
}
