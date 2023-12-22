import {useState} from 'react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Modal from "@/Components/Modal.jsx";

export default function CreateUserModal({modalState, closeModal}) {
    const [errors, setErrors] = useState({});

    const createUser = () => {

    }

    return (
        <Modal show={modalState} onClose={closeModal}>
            <form onSubmit={createUser} className="p-6">
                <h2 className="text-lg font-medium text-gray-900">
                    Create new user
                </h2>

                <div className="mt-6">
                    <InputLabel htmlFor="name" value="Name" className="sr-only"/>

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        className="mt-1 block w-3/4"
                        isFocused
                        placeholder="Name"
                    />

                    <InputError message={errors.password} className="mt-2"/>
                </div>

                <div className="mt-6">
                    <InputLabel htmlFor="email" value="Email" className="sr-only"/>

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        className="mt-1 block w-3/4"
                        isFocused
                        placeholder="Email"
                    />

                    <InputError message={errors.password} className="mt-2"/>
                </div>

                <div className="mt-6">
                    <InputLabel htmlFor="password" value="Passwordd" className="sr-only"/>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        className="mt-1 block w-3/4"
                        isFocused
                        placeholder="Password"
                    />

                    <InputError message={errors.password} className="mt-2"/>
                </div>

                <div className="mt-6 flex justify-end">
                    <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                    <PrimaryButton className="ms-3">
                        Create user
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    );
}
