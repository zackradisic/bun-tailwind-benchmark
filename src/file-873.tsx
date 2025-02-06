import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <h1 className="text-5xl font-bold text-white mb-5">Welcome to Bun with Tailwind!</h1>
      <p className="text-white text-lg mb-10">Building fullstack applications has never been easier.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-lg shadow-lg p-5">
          <h2 className="text-2xl font-semibold mb-2">Frontend</h2>
          <p className="text-gray-700">This is where you can display your amazing UI using React and Tailwind CSS!</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-5">
          <h2 className="text-2xl font-semibold mb-2">Backend</h2>
          <p className="text-gray-700">Your API is handled seamlessly with Bun&apos;s server-side capabilities.</p>
        </div>
      </div>
      <button className="mt-5 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
};

export default App;
