<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
  public function login(Request $request){
    $validator = Validator::make($request->all(), [
      'email' => ['required'],
      'password' => ['required'],
    ]);

    if($validator->fails()){
      return response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);
    } else {
      $user = User::where('email', $request->email)->first();

      if(!$user){
        return response()->json([
          'status' => 'warning',
          'message' => 'Email tidak terdaftar'
        ], Response::HTTP_OK);
      }
      else if(!Hash::check($request->password, $user->password)){
        return response()->json([
          'status' => 'error',
          'message' => 'Password salah'
        ], Response::HTTP_OK);
      }
      else {
        $token = $user->createToken($request->email)->plainTextToken;
        return response()->json([
          'status' => 'success',
          'token' => $token,
          'data' => $user
        ], Response::HTTP_OK);
      }
    }
  }

  public function logout(Request $request) {
    $user = $request->user();
    $user->currentAccessToken()->delete();

    return response()->json([
      'status' => 'success',
      'message' => 'Berhasil logout'
    ], Response::HTTP_OK);
  }
}
