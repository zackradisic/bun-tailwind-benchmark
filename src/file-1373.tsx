import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-8">This app is powered by Bun, React, and TypeScript!</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-300">
        Click Me!
      </button>
      <div className="mt-8 p-4 border border-gray-300 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-blue-500">Server Response:</h2>
        <div id="server-response" className="text-gray-600 mt-2">
          {/* Server response will be displayed here */}
        </div>
      </div>
    </div>
  );
};

export default App;
