import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to Bun + Tailwind!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a demonstration of how fast and simple it is to use Bun with React and TypeScript!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Client Side</h2>
          <p className="text-gray-600">
            Rendered with React on the client-side.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Server Side</h2>
          <p className="text-gray-600">
            Handled by Bun server. We also manage API requests seamlessly!
          </p>
        </div>
      </div>
      <footer className="mt-10 text-center">
        <p className="text-gray-500">Built with ❤️ using Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
