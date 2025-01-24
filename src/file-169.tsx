import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Welcome to Bun with Tailwind CSS!</h1>
      <p className="mb-6 text-center text-gray-700">
        Experience rapid development with fullstack capabilities using Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white rounded shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Client Side</h2>
          <p className="text-gray-600">
            This part of the application is handled by React. It uses Tailwind CSS for styling, allowing you to build responsive UIs quickly.
          </p>
        </div>
        <div className="p-6 bg-white rounded shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Side</h2>
          <p className="text-gray-600">
            The backend is powered by Bun, enabling seamless API handling and server-side rendering capabilities.
          </p>
        </div>
      </div>
      <footer className="mt-10 text-gray-500">
        <p>Built with ❤️ using Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
