<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
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
            return $this->index();
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }
    public function update(UpdateUserRequest $request)
    {
        try {
            $userData = $request->only(['email', 'name', 'password']);
            if (isset($userData['password'])) {
                $userData['password'] = Hash::make($userData['password']);
            }
            User::find($request->id)->update($userData);
            return $this->index();
        } catch (\Throwable $th) {
            return response()->json(['errors' => $th->getMessage()], 400);
        }
    }
}
