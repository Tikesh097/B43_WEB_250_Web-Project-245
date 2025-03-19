import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-4 mt-6 w-full fixed bottom-0">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Crime Reporting System. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;