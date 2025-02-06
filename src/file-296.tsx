import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My Bun App!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This app showcases Bun's fullstack capabilities with React & TypeScript.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
        Call API
      </button>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
        <ul className="list-disc list-inside text-gray-600">
          {/* Example users, should be loaded from an API in a real-world app */}
          <li className="mt-2">User 1</li>
          <li className="mt-2">User 2</li>
          <li className="mt-2">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
