import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-400">
      <h1 className="text-5xl font-bold text-white mb-8 shadow-lg">Welcome to Bun with Tailwind!</h1>
      <p className="text-xl text-white mb-4">This is a fullstack application showcasing the power of Bun.</p>
      <a
        href="/api/users"
        className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-100 transition duration-300"
      >
        Fetch Users
      </a>
      <div className="mt-10 p-5 bg-white rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-gray-800">Sample User List:</h2>
        <ul className="list-disc list-inside mt-4">
          {/* Example user items, replace with actual fetched data */}
          <li className="text-gray-700">User 1</li>
          <li className="text-gray-700">User 2</li>
          <li className="text-gray-700">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
