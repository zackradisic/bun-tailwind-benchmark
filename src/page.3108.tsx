import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-600">Welcome to Bun with Tailwind!</h1>
        <p className="text-lg mb-4 text-gray-600">This is a fullstack application powered by Bun and TailwindCSS.</p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-600 transition duration-300">
            Documentation
          </button>
        </div>
      </div>
      <footer className="mt-10 text-center text-gray-500">
        <p>&copy; 2023 Bun Fullstack Application</p>
      </footer>
    </div>
  );
};

export default App;
