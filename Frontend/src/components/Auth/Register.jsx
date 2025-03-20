import { useState } from 'react';
import { registerUser } from '../../services/api';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const { confirmPassword, ...dataToSend } = formData;
            await registerUser(dataToSend);
            setSuccess('Registration successful! You can now log in.');
            setError('');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (err) {
            setError('Registration failed. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
            {error && <p className="text-red-500 bg-red-50 p-3 rounded mb-4">{error}</p>}
            {success && <p className="text-green-500 bg-green-50 p-3 rounded mb-4">{success}</p>}

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 mb-1">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-1">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full transition duration-200"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;