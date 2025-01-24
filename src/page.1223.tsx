import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome to Bun with TailwindCSS</h1>
        <p className="text-gray-700 text-center mb-6">
          This is a simple fullstack application showcasing Bun's integration with React, TypeScript, and TailwindCSS.
        </p>
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mb-4">
            Fetch Users
          </button>
          <div className="bg-gray-200 rounded-lg p-4 w-full">
            <h2 className="text-xl font-semibold">Users:</h2>
            <ul className="list-disc list-inside mt-2">
              {/* Example of users populated from the API */}
              <li className="text-gray-800">User 1</li>
              <li className="text-gray-800">User 2</li>
              <li className="text-gray-800">User 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
