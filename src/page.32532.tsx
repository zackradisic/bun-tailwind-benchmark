import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-white rounded-lg shadow p-6 max-w-sm mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-600 text-center mb-6">Experience the speed and simplicity of building fullstack applications.</p>
        
        <div className="space-y-4">
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded transition duration-300 hover:bg-blue-600">
            Click Me!
          </button>
          <button className="w-full bg-purple-500 text-white font-semibold py-2 rounded transition duration-300 hover:bg-purple-600">
            Another Action
          </button>
        </div>
        
        <footer className="mt-8 text-center text-gray-500">
          <p>Powered by Bun and Tailwind CSS for fast and modern web experiences.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
