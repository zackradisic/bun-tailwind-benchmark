import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <header className="mb-5">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun & Tailwind!</h1>
        <p className="text-lg text-gray-700">Building fullstack applications has never been so easy.</p>
      </header>
      <main className="flex flex-wrap justify-center">
        <div className="bg-white shadow-lg rounded-lg p-4 m-2 w-80">
          <h2 className="text-2xl font-semibold text-green-500">Client Component</h2>
          <p className="text-gray-600 mt-2">This is where your frontend code lives.</p>
          <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
            Click Me!
          </button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 m-2 w-80">
          <h2 className="text-2xl font-semibold text-red-500">API Response</h2>
          <p className="text-gray-600 mt-2">Here's where your backend API integrates.</p>
          <pre className="bg-gray-200 rounded p-2 mt-4 text-sm">
            {JSON.stringify({ message: "Hello from Bun's server!" }, null, 2)}
          </pre>
        </div>
      </main>
      <footer className="mt-10">
        <p className="text-gray-500">&copy; 2023 Bun & Tailwind Integration</p>
      </footer>
    </div>
  );
};

export default App;
