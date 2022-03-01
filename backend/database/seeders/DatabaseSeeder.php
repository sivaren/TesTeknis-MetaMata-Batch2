<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {   
        // Insert to resep table
        DB::table('resep')->insert([
            'foto' => 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg',
            'suka' => 5,
            'nama' => 'Lontong Sayur',
            'deskripsi' => 'Lontong ditambah sayuran bumbu kacang gulai'
        ]);
        DB::table('resep')->insert([
            'foto' => 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg',
            'suka' => 2,
            'nama' => 'Sayur Lodeh',
            'deskripsi' => 'Sayur pakai kuah kaldu'
        ]);
        DB::table('resep')->insert([
            'foto' => 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg',
            'suka' => 1,
            'nama' => 'Mie goreng kostan',
            'deskripsi' => 'Mie paling enak sedunia'
        ]);
        DB::table('resep')->insert([
            'foto' => 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg',
            'suka' => 0,
            'nama' => 'Ayam pop',
            'deskripsi' => 'Ayam paling enak di jalan tol'
        ]);
        DB::table('resep')->insert([
            'foto' => 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg',
            'suka' => 77,
            'nama' => 'Ayam cola',
            'deskripsi' => 'Ayam paling enak di warung W.CO Cisitu Lama'
        ]);

        // Insert to bahan table
        DB::table('bahan')->insert([
            'nama' => 'Telor',
            'resep_id' => 1
        ]);
        // Insert to cara_buat table
        DB::table('cara_buat')->insert([
            'langkah' => 'Pecahkan telor',
            'resep_id' => 1
        ]);
    }
}
