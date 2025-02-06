import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building Fullstack apps with React & TypeScript has never been easier.</p>
      <button className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
        Click Me!
      </button>
      <div className="mt-4 p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-2">Fetch Data from API</h2>
        <p className="text-gray-600 mb-4">API Response:</p>
        <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
          {/* Here, we would typically set state to store API response 
              and display it. This is just a placeholder */}
          <p className="text-sm text-gray-500">Loading data...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
