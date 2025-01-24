import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App!</h1>
      <p className="text-lg mb-6 text-gray-700">This app showcases the power of Bun with React and Tailwind CSS!</p>
      <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
        Click Me
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-500">Server Data:</h2>
        <ul className="list-disc list-inside">
          <li className="mt-2">User 1: John Doe</li>
          <li className="mt-2">User 2: Jane Smith</li>
          <li className="mt-2">User 3: Alice Johnson</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
