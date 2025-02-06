import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun + Tailwind</h1>
      <p className="text-lg text-gray-700">
        This is a demonstration of Bun's fullstack capabilities using React and TypeScript!
      </p>
      <button className="mt-4 px-5 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-200">
        Click Me!
      </button>

      {/* Fetching data from API on the client-side */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">User List</h2>
        <ul className="mt-4 list-disc list-inside">
          {/* Example for client fetch - this will be an empty list initially */}
          <li className="text-gray-600">Loading users...</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
