import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Hello, Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a simple fullstack application showcasing the power of Bun with React and TypeScript.
      </p>
      <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Click Me
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response</h2>
        <pre className="mt-4 p-4 bg-gray-200 rounded-lg text-sm text-gray-800">
          {JSON.stringify(fetchData(), null, 2)}
        </pre>
      </div>
    </div>
  );
};

// Simulate a fetch call to the server
async function fetchData() {
  const response = await fetch('/api/data');
  return response.json();
}

export default App;
