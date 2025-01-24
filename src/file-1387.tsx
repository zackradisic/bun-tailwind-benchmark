import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun Fullstack App</h1>
      <p className="text-lg text-gray-700 mb-8">This is a demo showcasing Bun's new Tailwind integration</p>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">Server Response</h2>
        <p className="text-gray-600">Fetching data from the Bun server...</p>
        <div className="mt-4 p-4 border rounded-lg border-gray-300 bg-gray-50">
          {/* Simulate fetching from server */}
          <pre className="text-sm text-gray-800">
            {/* Mock API response */}
            {JSON.stringify({ message: "Hello from the server!" }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
