import React from 'react';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a quick demo showcasing Bun's fullstack capabilities.</p>
      <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
        Click Me
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response</h2>
        <div id="server-response" className="mt-2 p-4 border border-gray-300 rounded bg-white shadow">
          {/* Server response will be populated here */}
        </div>
      </div>
    </div>
  );
};

export default App;
