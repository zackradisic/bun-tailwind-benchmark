import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">This is an example of a fullstack application built with:</p>
      <ul className="list-disc list-inside mb-6">
        <li className="text-green-600">Bun</li>
        <li className="text-green-600">React</li>
        <li className="text-green-600">TypeScript</li>
        <li className="text-green-600">Tailwind CSS</li>
      </ul>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">Fetch Users</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400">Clear</button>
      </div>
      <div className="mt-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800">User List</h2>
        <ul className="bg-white shadow-md rounded-lg p-4 mt-2">
          {/* Sample User Items */}
          <li className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">User 1</span>
            <span className="text-gray-500">Active</span>
          </li>
          <li className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">User 2</span>
            <span className="text-gray-500">Inactive</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
