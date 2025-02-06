import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Bun with Tailwind CSS</h1>
      <p className="mt-4 text-lg text-gray-600">This is a fullstack React application powered by Bun!</p>
      <div className="mt-8 grid grid-cols-1 gap-4">
        <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
          Client Action
        </button>
        <button className="px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300">
          API Request
        </button>
      </div>
      <footer className="mt-12 text-center text-gray-500">
        <p>Powered by Bun 🐶</p>
      </footer>
    </div>
  );
};

export default App;
