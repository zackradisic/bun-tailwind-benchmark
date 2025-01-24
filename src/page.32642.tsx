import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to My Fullstack App!</h1>
        <p className="text-lg text-gray-600">Built with React, TypeScript, and Tailwind CSS</p>
      </header>
      <main className="flex flex-col items-center">
        <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none mb-4">
          Fetch Users
        </button>
        <div className="w-full p-4 bg-white shadow-md rounded">
          <h2 className="text-xl font-semibold">User List</h2>
          <ul className="mt-2 space-y-2">
            {/* Simulated list of users; in a real app, this would come from the server */}
            <li className="p-4 bg-gray-200 rounded">User 1</li>
            <li className="p-4 bg-gray-200 rounded">User 2</li>
            <li className="p-4 bg-gray-200 rounded">User 3</li>
          </ul>
        </div>
      </main>
      <footer className="mt-8">
        <p className="text-gray-500">© 2023 My Fullstack App</p>
      </footer>
    </div>
  );
};

export default App;
