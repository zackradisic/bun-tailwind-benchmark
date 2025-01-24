import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">
        Welcome to Bun with Tailwind
      </h1>
      <p className="text-lg text-gray-700 mb-3">
        This is a demo showcasing the power of Bun with React and Tailwind CSS.
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Client Button
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
          API Button
        </button>
      </div>
      <footer className="mt-10 text-sm text-gray-500">
        <div>Powered by Bun</div>
      </footer>
    </div>
  );
};

export default App;
