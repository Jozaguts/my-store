<?php

namespace App\Providers;

use App\Repositories\Products\Repository;
use App\Repositories\Products\RepositoryInterface;
use App\Services\Product\StoreProduct;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use App\Product;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(StoreProduct::class, function($app){
            return new StoreProduct(new Repository(new Product()));
        });
        $this->app->bind(RepositoryInterface::class, function($app){
            return new Repository(new Product());
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (env('APP_ENV') === 'production') {
            \Illuminate\Support\Facades\URL::forceScheme('https');
        }
        Schema::defaultStringLength(191);
    }
}
