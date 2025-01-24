import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application using React, TypeScript, and Tailwind CSS!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-purple-600">Client Side</h2>
          <p className="mt-2 text-gray-600">This part renders the main application using React. It showcases the fast bundling capabilities.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-green-600">Server Side</h2>
          <p className="mt-2 text-gray-600">This part handles API requests, showcasing Bun's integrated server functionality.</p>
        </div>
      </div>
      <footer className="mt-10 text-gray-500">
        <p>Built with 💙 using Bun's lightning-fast server capabilities!</p>
      </footer>
    </div>
  );
};

export default App;
