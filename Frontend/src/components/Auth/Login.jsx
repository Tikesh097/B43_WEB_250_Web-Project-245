import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { loginUser } from '../../services/api';
import { Link } from 'react-router-dom';

function Login() {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await loginUser(formData);
            login(response.data); // Assuming the response contains user data
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
            {error && <p className="text-red-500 bg-red-50 p-3 rounded mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
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

                <div className="mb-6 text-right">
                    <a href="#" className="text-sm text-orange-500 hover:text-orange-700">
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full transition duration-200"
                    disabled={isLoading}
                >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                </button>

                <div className="mt-4 text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-orange-500 hover:text-orange-700">
                        Create one
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;