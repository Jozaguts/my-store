<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class Product extends Model implements HasMedia
{
    use SoftDeletes, HasMediaTrait;

    protected $table = "products";
    public $timestamps = true;

    protected $fillable = ['barcode', 'stock', 'name', 'slug', 'description', 'price', 'status'];
}
