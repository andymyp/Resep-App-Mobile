<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $user = User::orderBy('id_user', 'desc')->get();
      $response = [
          'message' => 'Data user order by id_user desc',
          'data' => $user 
      ];

      return response()->json($response, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $validator = Validator::make($request->all(), [
        'nama' => ['required'],
        'email' => ['required', 'unique:user'],
        'password' => ['required', 'min:6', 'max:20'],
      ]);

      if($validator->fails()){
        return response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);
      } else {
        try {
          $user = User::create([
            'nama' => $request->nama,
            'email' => $request->email,
            'password' => Hash::make($request->password)
          ]);

          $response = [
            'status' => 'success',
            'message' => 'Berhasil menambahkan data user',
            'data' => $user
          ];

          return response()->json($response, Response::HTTP_CREATED);
        } catch (QueryException $e) {
          return response()->json([
            'status' => 'error',
            'message' => $e->errorInfo
          ], Response::HTTP_BAD_REQUEST);
        }
      }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
