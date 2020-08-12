<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Cashier\Cashier;

class CheckOutController extends Controller
{
    public function checkOut(Request $request)
    {
        
        dd($request->all());
//        $user = Cashier::findBillable($stripeId);

    }
}
