import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-3 mt-auto w-full fixed bottom-0">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-center md:text-left">
                            &copy; {currentYear} Crime Reporting System. All rights reserved.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center">
                        <div className="space-x-4 mb-4 md:mb-0">
                            <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition duration-200">
                                Privacy Policy
                            </Link>
                            <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition duration-200">
                                Terms of Service
                            </Link>
                            <Link to="/contact" className="text-gray-300 hover:text-white transition duration-200">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700 text-center md:text-left text-sm text-gray-400">
                    <p>
                        The Crime Reporting System is a platform dedicated to empowering citizens to report and track crime incidents in their community.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;