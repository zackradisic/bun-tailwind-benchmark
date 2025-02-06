import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to My Fullstack App!
      </h1>
      <p className="text-xl text-gray-700 mb-4">
        This is a demonstration of Bun's integration with Tailwind CSS.
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow-lg hover:bg-green-600 transition duration-200">
          Fetch Users
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow-lg hover:bg-red-600 transition duration-200">
          Delete User
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Users List:</h2>
        <ul className="mt-4 space-y-2">
          {/* Example user items */}
          <li className="p-4 bg-white rounded-lg shadow-md transition duration-200 hover:shadow-xl">
            User 1
          </li>
          <li className="p-4 bg-white rounded-lg shadow-md transition duration-200 hover:shadow-xl">
            User 2
          </li>
          <li className="p-4 bg-white rounded-lg shadow-md transition duration-200 hover:shadow-xl">
            User 3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
