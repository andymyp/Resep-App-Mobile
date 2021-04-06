<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Review extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('review', function (Blueprint $table) {
        $table->increments('id_review');
        $table->integer('id_resep')->unsigned();
        $table->foreign('id_resep')->references('id_resep')->on('resep')->onDelete('cascade')->onUpdate('cascade');
        $table->integer('id_user')->unsigned();
        $table->foreign('id_user')->references('id_user')->on('user')->onDelete('cascade')->onUpdate('cascade');
        $table->integer('rating');
        $table->text('comment');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('review');
    }
}
