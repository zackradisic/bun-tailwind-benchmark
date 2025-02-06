import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun!</h1>
      <p className="text-lg text-gray-700">Building fullstack apps has never been this easy!</p>
      <div className="mt-10 max-w-md w-full space-y-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-500">Server Part</h2>
          <p className="text-gray-600">
            To handle your API requests, Bun makes it easy to fetch data right from your server code.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-purple-500">Client Part</h2>
          <p className="text-gray-600">
            Use React to dynamically render your frontend, making API calls seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
