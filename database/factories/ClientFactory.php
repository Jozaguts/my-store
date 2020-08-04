<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Client;
use Faker\Generator as Faker;

$factory->define(Client::class, function (Faker $faker) {
    return [
        'first_name' => $faker->name,
        'last_name' => $faker->lastName,
        'email' => $faker->email,
        'phone' => $faker->e164PhoneNumber,
        'address' => $faker->streetAddress,
        'country' => $faker->country,
        'state' => $faker->state,
        'city' => $faker->city,
        'zip_code' => $faker->postcode
    ];
});
