import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun!</h1>
        <p className="text-lg text-gray-700 mb-6">
          This is a demo showcasing Bun's integration with Tailwind CSS in a fullstack application.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
          Get Started
        </button>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800">Server-Side Data Fetching</h2>
          <p className="text-gray-600">
            Below you will see the data fetched from the server:
          </p>
          <pre className="text-left bg-gray-100 p-4 rounded-lg mt-2">
            {JSON.stringify(fetch('/api/data'), null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
