import PrimaryButton from "@/Components/PrimaryButton.jsx";
import DangerButton from "@/Components/DangerButton.jsx";
import { router } from '@inertiajs/react'

export default function SingleUserRow({id, name, email}) {
    const deleteUser = () => {
        router.delete(`/users-list/delete/${id}`);
    }

    return (
        <div className="single-user-wrapper max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div
                className="single-user-item bg-white overflow-hidden shadow-sm sm:rounded-lg"
                style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}
            >
                <div className="p-6 text-gray-900">{id}</div>
                <div className="p-6 text-gray-900">{name}</div>
                <div className="p-6 text-gray-900">{email}</div>
                <div className="user-actions">
                    <PrimaryButton>Edit</PrimaryButton>
                    <DangerButton onClick={deleteUser}>Delete</DangerButton>
                </div>
            </div>
        </div>
    );
}
