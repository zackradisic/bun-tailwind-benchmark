import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <h1 className="text-5xl font-extrabold text-white mb-6">
        Welcome to Bun with TailwindCSS!
      </h1>
      <p className="text-lg text-white mb-8">
        This is how simple and fast it is to build fullstack applications with React & TypeScript using Bun.
      </p>
      <button className="bg-white text-blue-500 px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300">
        Click Me!
      </button>
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-white">Server & Client Setup</h2>
        <p className="text-white">
          Just define your API in the server using <code className="bg-gray-700 text-white px-1 rounded">Bun.serve()</code> and your React component renders client-side with TailwindCSS styling automatically.
        </p>
      </div>
    </div>
  );
};

export default App;
