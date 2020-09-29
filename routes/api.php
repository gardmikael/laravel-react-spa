<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Unprotected routes
Route::group(['middleware' => 'guest:api'], function () {

		Route::post('login', App\Http\Controllers\Api\Auth\LoginController::class)->name('login');
		Route::post('register', App\Http\Controllers\Api\Auth\RegisterController::class)->name('register');
			// Password Reset Routes...
		Route::post('password/email', [App\Http\Controllers\Api\Auth\ForgotPasswordController::class, 'sendResetLinkEmail']);
		Route::post('password/reset', [App\Http\Controllers\Api\Auth\ResetPasswordController::class, 'reset']);
});

// Protected routes
Route::middleware('auth:api')->group(function () {
	Route::get('me', [App\Http\Controllers\Api\Auth\MeController::class, 'me'])->name('me');
	Route::post('me', [App\Http\Controllers\Api\Auth\MeController::class, 'logout'])->name('logout');
});

