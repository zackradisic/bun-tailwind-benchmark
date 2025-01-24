import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-8">Built with React, TypeScript, and TailwindCSS</p>
      <button
        className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        onClick={async () => {
          const response = await fetch('/api/users');
          const data = await response.json();
          console.log(data);
        }}
      >
        Fetch Users
      </button>
      <div className="mt-6 p-4 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800">User List</h2>
        <ul className="mt-2">
          {/* Sample user list rendering logic */}
          {[...Array(5)].map((_, index) => (
            <li key={index} className="py-2 border-b border-gray-300">
              User {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
