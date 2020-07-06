<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Requests\CreateUserRequest;
use Http\Request\UpdateUserRequest;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        try {
            $users = User::all(['id', 'name', 'email']);
            return response()->json(['users' => $users]);
        } catch (\Throwable $th) {
            throw new Exception($th->getMessage(), 400);
        }
    }
    public function create(CreateUserRequest $request)
    {
        try {
            User::create($request->all())->save();
            $users = User::all(['id', 'name', 'email']);
            return response()->json(['users' => $users]);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }
}
