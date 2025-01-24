import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a demo showing how easy it is to create a fullstack app.</p>
      <button className="md:w-1/4 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        Click Me
      </button>
      <div className="mt-8 w-full md:w-1/2">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-2xl mb-2">Server Response:</h2>
          <pre className="bg-gray-200 p-2 rounded">Fetching data from the server...</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
