import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Welcome to Bun + React!</h1>
        <p className="text-gray-700 text-base mb-6">
          This is a fast and simple way to create fullstack applications with Tailwind CSS integration.
        </p>
        <div className="flex justify-center mb-6">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-200 hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-800">API Responses:</h2>
          <div className="mt-4 w-full">
            <pre className="bg-gray-200 p-4 rounded-lg text-sm text-gray-700 overflow-x-auto">
              {`{
  "message": "Hello from the server!",
  "status": "success"
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
