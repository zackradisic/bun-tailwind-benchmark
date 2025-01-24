import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application using Bun with Tailwind CSS.</p>
      <div className="flex flex-wrap justify-center space-x-4">
        <button className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded">Get Started</button>
        <button className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded">Learn More</button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Server Data:</h2>
        <div id="server-data" className="bg-white shadow-md rounded-lg p-4 mt-4">
          {/* Fetch and display data from the server here */}
        </div>
      </div>
    </div>
  );
};

export default App;
