import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is an example of how easy it is to use Bun with React & TypeScript.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
        Click Me!
      </button>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Client Side</h2>
          <p className="text-gray-600">
            This section demonstrates Bun's capability to run client-side applications seamlessly.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Server Side</h2>
          <p className="text-gray-600">
            Add API routes effortlessly and integrate with your frontend without breaking a sweat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
