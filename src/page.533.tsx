import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Welcome to My Bun App!</h1>
        <p className="text-gray-700 mb-6">This app showcases the speed and simplicity of using Bun with React and TypeScript!</p>
        <div className="flex flex-col">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Click Me!
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Another Action
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Quick API Call</h2>
          <div className="mt-2">
            <button
              onClick={async () => {
                const response = await fetch('/api/users');
                const data = await response.json();
                console.log('Fetched users:', data);
              }}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Fetch Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
