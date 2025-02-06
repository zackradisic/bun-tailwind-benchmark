import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to My Fullstack App with Bun!</h1>
      <p className="text-lg text-gray-700 mb-10">This is a simple example app demonstrating Bun's Tailwind integration.</p>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        <ul className="list-disc list-inside">
          <li className="py-2 px-3 bg-blue-50 rounded">User 1</li>
          <li className="py-2 px-3 bg-blue-50 rounded">User 2</li>
          <li className="py-2 px-3 bg-blue-50 rounded">User 3</li>
          <li className="py-2 px-3 bg-blue-50 rounded">User 4</li>
        </ul>
      </div>
      <footer className="mt-10 text-gray-600">
        <p>&copy; {new Date().getFullYear()} My Fullstack App</p>
      </footer>
    </div>
  );
};

export default App;
