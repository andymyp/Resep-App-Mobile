<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory;

    protected $table = "user";
    protected $primaryKey = "id_user";
    public $timestamps = false;

    protected $fillable = [
      'nama',
      'email',
      'password'
    ];

    protected $hidden = [
      'password'
    ];
}
