import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application powered by Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl text-blue-500">Client Component</h2>
          <p className="text-gray-600">This component is rendered directly on the client side.</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl text-blue-500">Server API</h2>
          <p className="text-gray-600">This is powered by Bun's fast API routing.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
