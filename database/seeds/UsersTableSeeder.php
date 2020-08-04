<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('users')->insert([
            'first_name' => 'José Sagit',
            'last_name' => 'Gutiérrez Terrazas',
            'email' => 'admin@mystore.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => null,
            'user_type_id' =>  '1',

            'phone' => '52 333 333 3333',
            'address' => '49 Newcastle Ave. Tuckerton, NJ 08087',
            'country' => 'Armenia' ,
            'state' => 'Michigan',
            'city' => 'Los Angeles',
            'zipcode' => '55318',
        ]);

        factory(App\User::class, 20)->create();
    }
}
