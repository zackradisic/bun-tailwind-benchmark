import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a demo of Bun's Fast Fullstack Development.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-600">Server</h2>
          <p className="text-gray-600">Our server is running with Bun!</p>
          <code className="block bg-gray-200 p-2 rounded-md text-sm">Bun.serve({`{}`})</code>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-red-600">Client</h2>
          <p className="text-gray-600">This is powered by React and TypeScript!</p>
          <code className="block bg-gray-200 p-2 rounded-md text-sm">const root = createRoot(document.getElementById('root'));</code>
        </div>
      </div>
      <footer className="mt-8 text-gray-500">
        <p>Powered by <strong>Bun</strong> and <strong>Tailwind CSS</strong></p>
      </footer>
    </div>
  );
};

export default App;
