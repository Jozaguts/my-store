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

    protected $fillable = ['name', 'slug', 'description', 'price', 'status'];
}
