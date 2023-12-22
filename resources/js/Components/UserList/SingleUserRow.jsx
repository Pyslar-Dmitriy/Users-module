import PrimaryButton from "@/Components/PrimaryButton.jsx";
import DangerButton from "@/Components/DangerButton.jsx";

export default function SingleUserRow({name}) {
    return (
        <div className="single-user-wrapper max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div
                className="single-user-item bg-white overflow-hidden shadow-sm sm:rounded-lg"
                style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}
            >
                <div className="p-6 text-gray-900">{name}</div>
                <div className="user-actions">
                    <PrimaryButton>Edit</PrimaryButton>
                    <DangerButton>Delete</DangerButton>
                </div>
            </div>
        </div>
    );
}
