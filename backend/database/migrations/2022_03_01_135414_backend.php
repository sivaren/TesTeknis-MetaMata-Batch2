<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('akun', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('password');
            $table->timestamps();
        });
        Schema::create('resep', function (Blueprint $table) {
            $table->id();
            $table->string('foto');
            $table->integer('suka');
            $table->string('nama');
            $table->string('deskripsi');
            $table->timestamps();
        });
        Schema::create('bahan', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('resep_id');
            $table->string('nama');
            $table->timestamps();
            $table->foreign('resep_id')->references('id')->on('resep')->onDelete('cascade');
        });
        Schema::create('cara_buat', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('resep_id');
            $table->string('langkah');
            $table->timestamps();
            $table->foreign('resep_id')->references('id')->on('resep')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cara_buat');
        Schema::dropIfExists('bahan');
        Schema::dropIfExists('resep');
        Schema::dropIfExists('akun');
    }
};
