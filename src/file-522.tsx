import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">
        This is a demo component showcasing the power of Bun and Tailwind CSS.
      </p>
      <div className="mt-6 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-500">Features</h2>
        <ul className="mt-2 list-disc list-inside">
          <li className="mt-1 text-lg text-gray-600">Fast Backend with Bun</li>
          <li className="mt-1 text-lg text-gray-600">Stylish UI with Tailwind CSS</li>
          <li className="mt-1 text-lg text-gray-600">React and TypeScript Support</li>
        </ul>
        <button className="mt-4 px-4 py-2 font-semibold text-white bg-blue-500 rounded shadow hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default App;
