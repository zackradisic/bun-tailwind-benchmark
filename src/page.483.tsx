import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">
        Welcome to My Bun + Tailwind App!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a simple demonstration of how to build fast fullstack applications with Bun using React and TypeScript.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-green-500">Client Side</h2>
          <p className="text-gray-600">This part showcases how you can easily create a responsive UI using Tailwind CSS.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-red-500">Server Side</h2>
          <p className="text-gray-600">Here's where we integrate with the server to fetch data seamlessly.</p>
        </div>
      </div>
      <footer className="mt-10 text-sm text-gray-500">
        <p>Built with ❤️ using Bun, React, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
