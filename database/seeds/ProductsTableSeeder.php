<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = factory(App\Product::class, 200)->create();

        foreach ($products as $key => $product) {

            $url = 'http://placemorty.us/' . random_int(200, 500) . '/' . random_int(300, 500);
            $product
                ->addMediaFromUrl($url)
                ->toMediaCollection();
        }
    }
}
