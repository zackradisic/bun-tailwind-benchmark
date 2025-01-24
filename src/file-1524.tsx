import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun + Tailwind App!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a simple demonstration of Bun's fullstack capabilities with React and TypeScript.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800">Client Component</h2>
          <p className="text-gray-600">This section showcases the client-side capabilities of the app.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800">API Interaction</h2>
          <p className="text-gray-600">Make API calls to the server-side using Bun's fetch feature.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800">Server Response</h2>
          <p className="text-gray-600">Receive responses from the server for a complete fullstack experience.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
