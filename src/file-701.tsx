import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome to Bun Fullstack App!</h1>
        <p className="text-gray-700 text-center mb-6">
          This is a simple demonstration of using <strong>Bun</strong> with <strong>React</strong> and <strong>TypeScript</strong>.
        </p>
        <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
          Click Me!
        </button>
        <div className="mt-4 p-4 border border-dashed border-blue-300 rounded">
          <strong className="block text-gray-800 mb-2">API Response</strong>
          <div className="text-sm text-gray-600" id="api-response">
            {/* API data will be loaded here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
