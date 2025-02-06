import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-200 mb-4">Experience amazing development speed and simplicity.</p>
      <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition duration-200">
        Click Me!
      </button>
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-white">Server API</h2>
        <div className="mt-4 p-4 bg-white shadow rounded">
          <p className="text-gray-800">Fetch users from the backend:</p>
          <pre className="bg-gray-200 p-2 rounded mt-2">
            {`fetch('/api/users')
  .then(response => response.json())
  .then(users => console.log(users));`}
          </pre>
        </div>
      </div>
      <footer className="mt-auto py-4">
        <p className="text-gray-300 text-sm">Built with Bun, React, and Tailwind</p>
      </footer>
    </div>
  );
};

export default App;
