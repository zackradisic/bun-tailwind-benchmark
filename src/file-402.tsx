import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a fullstack application built with React, TypeScript, and TailwindCSS.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-xl font-semibold text-green-500">Client-Side</h2>
          <p className="text-gray-600 mt-2">Utilizing Bun's fast bundling capabilities with React.</p>
        </div>
        <div className="p-6 bg-white rounded shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-xl font-semibold text-purple-500">Server-Side</h2>
          <p className="text-gray-600 mt-2">Seamlessly integrate APIs with your frontend.</p>
        </div>
        <div className="p-6 bg-white rounded shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-xl font-semibold text-red-500">Rapid Development</h2>
          <p className="text-gray-600 mt-2">Enjoy instant feedback with fast refresh and hot reloading.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
