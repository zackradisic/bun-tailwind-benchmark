import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-md">
        <h1 className="text-white text-3xl font-bold text-center">Bun Fullstack App</h1>
      </header>
      <main className="flex flex-col items-center">
        <h2 className="mt-8 text-lg text-gray-700">Welcome to your fullstack application!</h2>
        <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Fetch Data
        </button>
        <ul className="mt-8 w-full max-w-md">
          {/* Assuming data will be populated here from an API */}
          <li className="p-4 bg-white shadow-md rounded-lg mb-4">Item 1</li>
          <li className="p-4 bg-white shadow-md rounded-lg mb-4">Item 2</li>
          <li className="p-4 bg-white shadow-md rounded-lg mb-4">Item 3</li>
        </ul>
      </main>
      <footer className="mt-auto p-4 bg-blue-600 w-full">
        <p className="text-white text-center">Built with Bun & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
