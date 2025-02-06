import "./style.css";
import React from 'react';

const App: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
    <p className="text-lg text-gray-700 mb-8">Building fullstack applications made easy!</p>
    
    <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
      Click Me
    </button>

    <div className="flex space-x-4 mt-8">
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-500">Server</h2>
        <p className="text-gray-600">Fetch data, handle requests, and serve HTML files effortlessly.</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-500">Client</h2>
        <p className="text-gray-600">Render components quickly with Tailwind integration right out of the box.</p>
      </div>
    </div>
  </div>
);

export default App;
