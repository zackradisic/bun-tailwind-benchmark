import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to Bun with TailwindCSS!
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a demo showcasing the power of building fullstack applications using Bun and React.
      </p>
      <a
        href="/api/users"
        className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Fetch Users
      </a>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Sample Users</h2>
        <ul className="mt-4 space-y-4">
          {/* Example static list for demonstration */}
          <li className="p-4 bg-white shadow rounded-lg">
            <span className="font-bold text-lg">User 1</span>
          </li>
          <li className="p-4 bg-white shadow rounded-lg">
            <span className="font-bold text-lg">User 2</span>
          </li>
          <li className="p-4 bg-white shadow rounded-lg">
            <span className="font-bold text-lg">User 3</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
