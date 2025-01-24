import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-8">This app showcases the incredible speed of Bun with React and TypeScript!</p>
      
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Quick Dashboard</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Fetch User Data
        </button>
      </div>
      
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Made with ❤️ using Bun, React, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
