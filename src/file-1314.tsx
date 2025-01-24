import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-600 to-blue-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-200 mb-8">This is a demonstration of a fullstack application using Bun, React, & TypeScript.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Client-Side Component</h2>
          <p className="text-gray-700">This component runs on the client using React & Tailwind CSS.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Click Me
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Server-Side API</h2>
          <p className="text-gray-700">This section interacts with the Bun server to fetch data.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={fetchData}>
            Fetch Data
          </button>
        </div>
      </div>
    </div>
  );
};

async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  console.log(data);
}

export default App;
