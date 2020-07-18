<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'slug' => $faker->unique()->slug,
        'description' => $faker->text(100),
        'price' => $faker->randomFloat(2, 50, 5000),
        'status' => $faker->numberBetween(0, 1),
        'stock' =>random_int(2, 50),
    ];
});
