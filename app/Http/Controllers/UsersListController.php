<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class UsersListController extends Controller
{
    public function show(): Response
    {
        $users = User::all();

        return Inertia::render('UsersList/UsersListPage', [
            'users' => $users,
        ]);
    }

    public function delete(int $id)
    {
        User::destroy($id);
    }
}
