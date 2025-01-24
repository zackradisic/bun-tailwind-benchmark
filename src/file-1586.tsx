import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-200 mb-8">Building fullstack applications has never been easier.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold">Client Side</h2>
          <p className="text-gray-600">This component uses React and TypeScript together with Tailwind CSS for styling.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold">Server Side</h2>
          <p className="text-gray-600">Easily handle API requests and serve static assets using Bun&apos;s powerful server.</p>
        </div>
      </div>
      <footer className="mt-8">
        <p className="text-gray-400">© 2023 Bun. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
