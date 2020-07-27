<?php

use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\DB;

class UserTypesTableSeeder extends Seeder
{

    public function run()
    {
        DB::table('user_types')->insert([
            'type' => 'admin',
        ]);
        factory(\App\UserType::class, 4)->create();

    }
}
