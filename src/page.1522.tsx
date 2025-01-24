import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with React & TypeScript</h1>
      <p className="text-lg text-gray-700 mb-8">This is a demo app showcasing the new Tailwind integration!</p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          API Call
        </button>
      </div>
      <div className="mt-10 p-6 w-full max-w-md bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Server Response:</h2>
        <pre className="bg-gray-200 p-4 rounded">
          {`{
            "message": "Hello from the server",
            "status": "Success"
          }`}
        </pre>
      </div>
    </div>
  );
};

export default App;
