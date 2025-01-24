import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Welcome to My Bun & Tailwind App!
        </h1>
        <p className="text-gray-700 text-center">
          This is a fullstack application showcasing Bun's integration with Tailwind CSS.
        </p>
        <div className="mt-6 flex justify-around">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Client Button
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Server Button
          </button>
        </div>
        <footer className="mt-8 text-center text-gray-500 text-sm">
          Powered by Bun and Tailwind CSS
        </footer>
      </div>
    </div>
  );
};

export default App;
