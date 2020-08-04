<?php

namespace App\Repositories\Products;

use App\Product;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Repositories\BaseInterface;

interface RepositoryInterface extends BaseInterface
{
    public function paginate(string $items, string $page): object ;
    public function getImageOfEachItem(object $items) :object ;
}
