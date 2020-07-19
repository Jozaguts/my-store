<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sale extends Model
{
    use SoftDeletes;
    protected $table = 'sales';
    public $timestamps = true;
    protected $fillable = ['product_id', 'client_id', 'amount', 'date', 'payment_type_id'];

}
