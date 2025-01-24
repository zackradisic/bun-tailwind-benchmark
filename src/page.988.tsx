import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">
        Enjoy the super fast, fullstack development experience.
      </p>
      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-500">API Response:</h2>
        <div className="mt-2 p-2 border border-gray-300 rounded">
          <pre className="text-sm font-mono text-gray-800">
            {/* Placeholder for API data */}
            {"{ users: [ { id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' } ] }"}
          </pre>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
        Fetch Users
      </button>
    </div>
  );
};

export default App;
