import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white mb-5 shadow-lg">
        Welcome to Bun with TailwindCSS!
      </h1>
      <p className="text-xl text-white mb-10">
        Experience the speed of Bun with the elegance of TailwindCSS and React.
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Fast Development</h2>
          <p className="text-gray-700">Instant server reloading and rebuilds.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Simplicity</h2>
          <p className="text-gray-700">Write less boilerplate code.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Fullstack Integration</h2>
          <p className="text-gray-700">Easily connect frontend and backend.</p>
        </div>
      </div>
      <footer className="mt-10">
        <p className="text-white">
          Built with ❤️ using Bun, React, and TailwindCSS
        </p>
      </footer>
    </div>
  );
};

export default App;
