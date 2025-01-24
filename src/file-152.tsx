import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a simple fullstack application demonstrating the power of Bun, React, and TailwindCSS.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-white text-center">
          <h2 className="text-2xl font-semibold text-green-600">Server Side</h2>
          <p className="mt-2 text-gray-600">Fetch data effortlessly using Bun's API.</p>
          {/* Example of fetching API data */}
          <button
            className="mt-4 px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={async () => {
              const response = await fetch('/api/users');
              const data = await response.json();
              console.log(data);
            }}
          >
            Fetch Users
          </button>
        </div>
        <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-white text-center">
          <h2 className="text-2xl font-semibold text-purple-600">Client Side</h2>
          <p className="mt-2 text-gray-600">React components styled with TailwindCSS.</p>
          <button
            className="mt-4 px-4 py-2 font-semibold text-white bg-purple-500 rounded hover:bg-purple-600"
            onClick={() => alert('Hello from the Client Side!')}
          >
            Say Hello
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
