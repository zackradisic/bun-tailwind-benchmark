import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-6">
      <h1 className="text-6xl font-bold text-white mb-8">Welcome to Bun!</h1>
      <p className="text-2xl text-white mb-4">Fast, simple, and powerful fullstack development.</p>
      <div className="flex space-x-4">
        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow-lg hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow-lg hover:bg-gray-200 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-4xl font-bold text-white">API Fetch Example</h2>
        <pre className="bg-gray-800 text-white p-4 rounded mt-2">
          {`fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log(data));`}
        </pre>
      </div>
    </div>
  );
};

export default App;
