import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradients bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun Fullstack!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a React application powered by Bun and Tailwind CSS.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <h2 className="text-2xl font-semibold text-green-500">Client Side</h2>
          <p className="text-gray-600">
            Easily manage your React components and styles with Tailwind classes to create a responsive design.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <h2 className="text-2xl font-semibold text-purple-500">Server Side</h2>
          <p className="text-gray-600">
            Use Bun’s fast HTTP server to handle API requests simply and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
