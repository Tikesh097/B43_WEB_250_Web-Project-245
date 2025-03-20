import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "font-bold" : "";
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-orange-500 py-4 px-6 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Crime Reporting System</h1>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen
                            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        }
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex space-x-8">
                        <li><Link to="/" className={`hover:underline transition duration-200 ${isActive('/')}`}>Home</Link></li>
                        <li><Link to="/dashboard" className={`hover:underline transition duration-200 ${isActive('/dashboard')}`}>Dashboard</Link></li>
                        <li><Link to="/report" className={`hover:underline transition duration-200 ${isActive('/report')}`}>Report Crime</Link></li>

                        {user ? (
                            <>
                                <li>
                                    <Link to="/profile" className={`hover:underline transition duration-200 ${isActive('/profile')}`}>
                                        My Profile
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={logout}
                                        className="bg-white text-orange-600 px-4 py-1 rounded-full hover:bg-orange-100 transition duration-200"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login" className={`hover:underline transition duration-200 ${isActive('/login')}`}>
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/register"
                                        className="bg-white text-orange-600 px-4 py-1 rounded-full hover:bg-orange-100 transition duration-200"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="lg:hidden mt-4 pb-4">
                    <ul className="flex flex-col space-y-3">
                        <li><Link to="/" className="block hover:bg-orange-600 px-3 py-2 rounded" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/dashboard" className="block hover:bg-orange-600 px-3 py-2 rounded" onClick={toggleMenu}>Dashboard</Link></li>
                        <li><Link to="/report" className="block hover:bg-orange-600 px-3 py-2 rounded" onClick={toggleMenu}>Report Crime</Link></li>

                        {user ? (
                            <>
                                <li><Link to="/profile" className="block hover:bg-orange-600 px-3 py-2 rounded" onClick={toggleMenu}>My Profile</Link></li>
                                <li>
                                    <button
                                        onClick={() => {
                                            logout();
                                            toggleMenu();
                                        }}
                                        className="w-full text-left block bg-white text-orange-600 px-3 py-2 rounded hover:bg-orange-100"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/login" className="block hover:bg-orange-600 px-3 py-2 rounded" onClick={toggleMenu}>Login</Link></li>
                                <li>
                                    <Link
                                        to="/register"
                                        className="block bg-white text-orange-600 px-3 py-2 rounded hover:bg-orange-100"
                                        onClick={toggleMenu}
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;