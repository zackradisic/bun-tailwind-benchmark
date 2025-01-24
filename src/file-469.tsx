import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to My Bun App!</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is a fast and simple fullstack application using Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600">Client Side</h2>
          <p className="mt-2 text-gray-700">This section showcases the client part of the app.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600">Server Side</h2>
          <p className="mt-2 text-gray-700">This section showcases the server part of the app.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600">API Integration</h2>
          <p className="mt-2 text-gray-700">Fetch data seamlessly with the Bun API!</p>
        </div>
      </div>
      <footer className="mt-12 text-gray-500">
        <p>&copy; 2023 My Bun App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
