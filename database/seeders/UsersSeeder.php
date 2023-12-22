<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'John Doe',
            'role_id' => Role::ROLE_REGULAR,
            'password' => Hash::make('qwe123'),
        ]);
        User::factory()->create([
            'name' => 'Important Admin',
            'role_id' => Role::ROLE_ADMIN,
            'password' => Hash::make('qwe123')
        ]);
    }
}
