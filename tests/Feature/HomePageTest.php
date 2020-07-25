<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class HomePageTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function test_check_correct_data_structure_for_paginate()
    {
        $response = $this->get('/api/products/created-at');

        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                'paginate' => [
                    'total',
                    'current_page',
                    'per_page',
                    'last_page',
                    'from',
                    'to',
                ],
            ]);

    }

    public function test_check_correct_data_structure_for_products_data()
    {
        $response = $this->get('/api/products/created-at');

        $response->assertJsonStructure([
            "products" => [
                "current_page",
                'data' => [['id', 'name', 'slug', 'description', 'price', 'status', 'publicUrl']],
                "first_page_url",
                "from",
                "last_page",
                "last_page_url",
                "next_page_url",
                "path",
                "per_page",
                "prev_page_url",
                "to",
                "total"
            ],
        ]);


    }

    public function test_get_at_least_the_three_latest_products_added()
    {
        $response = $this->get('api/products/created-at')->getContent();
        $data = json_decode($response);
        $this->assertGreaterThanOrEqual(1, count($data->products->data));
        $this->assertLessThanOrEqual(4, count($data->products->data));
    }
}
