import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-8">This application is built with Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Side Rendering</h2>
          <p className="text-gray-600">
            This section demonstrates Bun's powerful server capabilities, handling API requests seamlessly.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Client Side Interaction</h2>
          <p className="text-gray-600">
            The client side showcases a React component that leverages Tailwind for elegant styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
