<?php

namespace Tests\Feature\app\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductsControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_pagination_index_page()
    {
        $response = $this->get('/api/products/');

        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    'current_page',
                    'data' => [['id', 'name', 'slug', 'description', 'price', 'status', 'stock', 'publicUrl']],
                    'next_page_url',
                    'path',
                    'per_page',
                    'prev_page_url',
                    'to',
                    'total',
                ]
            ]);

    }
}
