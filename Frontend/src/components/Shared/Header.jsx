const Header = () => {
    return (
      <header className="bg-blue-700 py-6 px-6 text-white flex justify-between items-center shadow-lg ">
        <h1 className="text-2xl font-bold">Crime Reporting System</h1>
        <nav>
          <ul className="flex space-x-7">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
            <li><a href="/register" className="hover:underline">Register</a></li>
            <li><a href="/report" className="hover:underline">Report Crime</a></li>
            <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;