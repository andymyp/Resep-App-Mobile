<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Resep extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('resep', function (Blueprint $table) {
        $table->increments('id_resep');
        $table->integer('id_user')->unsigned();
        $table->foreign('id_user')->references('id_user')->on('user')->onDelete('cascade')->onUpdate('cascade');
        $table->string('judul');
        $table->text('alat');
        $table->text('bahan');
        $table->mediumText('langkah');
        $table->dateTime('dibuat_pada');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resep');
    }
}
