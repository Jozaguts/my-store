<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use SoftDeletes;

    protected $table = 'clients';
    protected $fillable = [
        'first_name', 'last_name', 'email', 'phone', 'address', 'country', 'state', 'city', 'zip_code'
    ];

}
