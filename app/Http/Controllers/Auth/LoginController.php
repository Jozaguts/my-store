<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {

        try {
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

                $user = $request->user();

                $tokenResult = $user->createToken('accessToken');

                $token = $tokenResult->token;
                if ($request->remember_me) {
                    $token->expires_at = Carbon::now()->addWeeks(1);
                }

                $token->save();
                return response()->json([
                    'access_token' => $tokenResult->accessToken,
                    'token_type'   => 'Bearer',
                    'expires_at'   => Carbon::parse($tokenResult->token->expires_at)->toDateTimeString(),
                    'user' => $user->only(['name', 'id']),
                ]);
            } else {
                return response()->json(['error' => 'The credentials doesn\'t match with ours registers '], 400);
            }
        } catch (\Throwable $th) {
            return response()->json(
                ['errors' => $th->getMessage()],
                400
            );
        }
    }

    public function logout(Request $request)
    {

        try {
            auth()->user()->tokens->each(function ($token, $key) {
                $token->revoke();
            });
            Auth::logout();
            return response()->json(['success' => 'logout was success']);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }
}
