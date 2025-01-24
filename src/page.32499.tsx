import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to Bun!</h1>
      <p className="text-lg text-gray-200 mb-8">
        Experience the speed of building fullstack applications with Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Client Side</h2>
          <p className="text-gray-700">
            Rendered dynamically using React. Quick to set up and responsive!
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Server Side</h2>
          <p className="text-gray-700">
            API managed effortlessly with Bun. Enjoy seamless integration.
          </p>
        </div>
      </div>
      <footer className="mt-8 text-gray-300">
        <p>Built with 🛠️ Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
