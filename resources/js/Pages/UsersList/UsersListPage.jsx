import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import SingleUserRow from "@/Components/SingleUserRow.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function UsersListPage({ auth, users }) {
    const renderUsers = () => {
        return users.map(user => {
            return <SingleUserRow key={user.id} name={user.name}/>
        })
    }

    let list = renderUsers();

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users list</h2>}
        >
            <Head title="Users list" />

            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <PrimaryButton>
                    Add user
                </PrimaryButton>
            </div>

            <div className="py-12">
                {list}
            </div>
        </AuthenticatedLayout>
    );
}
