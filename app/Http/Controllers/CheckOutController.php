<?php

namespace App\Http\Controllers;

use App\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CheckOutController extends Controller
{
    private $priceProducts = [];

    public function payment(Request $request)
    {

        $user = User::where('email', $request['userInformation']['email'])->first();

        $user->createOrGetStripeCustomer();

        $paymentMethod = $request['setupIntent']['payment_method'];

        $user->addPaymentMethod($paymentMethod);
        try {
            $user->charge($this->getAmount($request->cartItems), $paymentMethod);
            return response()->json('succeeded', 200);

        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 400);
        }

    }

    public function getAmount(array $cartItems): int
    {

        foreach ($cartItems as $item) :
            $productInfo = DB::table('products')
                ->select('price', 'name')
                ->where('id', '=', $item['id'])
                ->first();
            $this->priceProducts[] = ($productInfo->price * $item['quantity']);
        endforeach;

        $amount = array_reduce($this->priceProducts, function ($carry, $item) {
            $carry += $item;
            return $carry;
        });

        return ($amount * 1) * 100;
    }

    public function clientIntent(Request $request)
    {
        $user = User::find($request->userId);

        try {
            return response()->json([
                'intent' => $user->createSetupIntent()
            ], 200);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 400);
        }
    }
}
