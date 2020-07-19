<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SaleDetail extends Model
{

    use softDeletes;

    protected $table = 'sale_details';

    protected $fillable = ['sale_id', 'product_id', 'price', 'quantity'];

    public $timestamps = true;
}
