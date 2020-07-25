<?php

namespace app\Repositories;

use app\Product;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProductRepository implements ProductRepositoryInterface
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

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update(array $data, $id)
    {
        return $this->model->where('id', $id)
            ->update($data);
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
}
