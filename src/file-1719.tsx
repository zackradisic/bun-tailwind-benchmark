import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-xl text-gray-700 mb-4">Experience the speed and simplicity of fullstack development.</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Click Me!
      </button>
      <footer className="mt-10">
        <p className="text-sm text-gray-500">&copy; 2023 Built with Bun and Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;
