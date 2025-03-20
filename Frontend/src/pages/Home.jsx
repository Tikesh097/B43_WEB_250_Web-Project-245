import React from 'react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Crime Reporting System</h1>
        <p className="mt-4 text-lg text-gray-600">Report incidents, track cases, and access crime statistics.</p>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold text-gray-700">Report an Incident</h2>
            <p className="mt-2 text-gray-600">Submit details about crimes or suspicious activities.</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-gray-700">Report Now</button>
          </div>
          
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold text-gray-700">Track Your Case</h2>
            <p className="mt-2 text-gray-600">Monitor the status of previously reported incidents.</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-gray-700">Track Case</button>
          </div>
          
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold text-gray-700">Crime Statistics</h2>
            <p className="mt-2 text-gray-600">Access data and trends about local crime reports.</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-gray-700">View Stats</button>
          </div>
        </div>    
      </div>
    </div>
  );
}

export default Home;