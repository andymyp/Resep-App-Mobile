<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resep extends Model
{
    use HasFactory;

    protected $table = "resep";
    protected $primaryKey = "id_resep";
    public $timestamps = false;

    protected $fillable = [
      'id_user',
      'judul',
      'alat',
      'bahan',
      'langkah',
      'dibuat_pada',
    ];
}
