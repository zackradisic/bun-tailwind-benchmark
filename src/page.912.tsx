import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full text-white p-4">
        <h1 className="text-2xl font-bold">Welcome to My Bun App</h1>
      </header>
      <main className="mt-10 p-4 w-full max-w-3xl">
        <h2 className="text-xl font-semibold text-gray-800">Bun + TailwindCSS + React</h2>
        <p className="text-gray-700 mt-2">
          This is a sample application demonstrating Bun's fullstack capabilities using TailwindCSS for styling.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-900">Client-Side Rendering</h3>
            <p className="text-gray-600">
              With Bun, you can seamlessly render components on the client side using React.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-900">Server-Side API</h3>
            <p className="text-gray-600">
              Create powerful APIs to fetch data efficiently.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 w-full text-white p-4 text-center">
        <p>© 2023 My Bun Application</p>
      </footer>
    </div>
  );
};

export default App;
