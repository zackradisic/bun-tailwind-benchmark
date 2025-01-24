import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to My Bun App!</h1>
      <p className="text-lg text-white mb-12">
        This is a fullstack application built with Bun, React, and TypeScript using TailwindCSS.
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-blue-500">Server Side</h2>
          <p className="text-gray-700">Fetch data from your API effortlessly.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-green-500">Client Side</h2>
          <p className="text-gray-700">Render components seamlessly with React.</p>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full text-center py-4 bg-gray-800 text-white">
        <p>Powered by Bun & TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
