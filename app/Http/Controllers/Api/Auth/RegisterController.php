<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;

class RegisterController extends Controller
{
    public function __invoke(Request $request)
    {
        $this->validate($request, [
			'first_name' => 'required|string|min:3|max:255',
			'last_name' => 'required|string|min:3|max:255',
            'email' => 'email|required|unique:users,email',
            'password' => 'required|string|min:8|confirmed'
		]);

        $user = User::create([
			'first_name' => $request->first_name,
			'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        if (!$token = auth()->attempt($request->only(['email', 'password']))) {
            return abort(401);
        }

        return (new UserResource($request->user()))->additional(['meta' => ['token' => $token]]);
    }
}
