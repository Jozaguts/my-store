<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\Client as PassportClient;
use GuzzleHttp\Client;

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
                $access_token = $this->getToken($request->email, $request->password);
                return response()->json(
                    ['access_token' => $access_token],
                    200
                );
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
    public function getToken($email, $password)
    {
        $client = PassportClient::where('password_client', 1)->first();
        $http = new Client(['base_uri' => url('/')]);
      
        $response = $http->post(
            '/oauth/token',
            [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => $client->id,
                    'client_secret' => $client->secret,
                    'username' => $email,
                    'password' => $password,
                    'scope' => '',
                ],
            ]
        );

        return json_decode((string) $response->getBody(), true);
    }
}
