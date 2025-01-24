import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700">
        This is a fullstack app built with Bun, React, and TypeScript.
      </p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Click Me
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-xl font-semibold">Server Part</h2>
          <p className="text-gray-600">Fetch data from your Bun server:</p>
          <pre className="bg-gray-100 p-2 rounded text-sm">const response = await fetch('/api/data');</pre>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-xl font-semibold">Client Part</h2>
          <p className="text-gray-600">Effortlessly render with React:</p>
          <pre className="bg-gray-100 p-2 rounded text-sm">const data = response.json();</pre>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-xl font-semibold">Final Output</h2>
          <p className="text-gray-600">Serve everything seamlessly:</p>
          <pre className="bg-gray-100 p-2 rounded text-sm">Bun.serve({...});</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
