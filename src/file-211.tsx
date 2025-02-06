import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun with TailwindCSS</h1>
      <p className="text-lg text-gray-700 mb-8">This is a demo showing how fast and simple it is to build fullstack applications with Bun!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Client Component</h2>
          <p className="text-gray-600">This component renders on the client-side and showcases Tailwind's utility classes.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Click Me!</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">API Response</h2>
          <p className="text-gray-600">This section can display data fetched from your Bun server's API.</p>
          <pre className="bg-gray-100 p-4 rounded">{`await fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));`}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
