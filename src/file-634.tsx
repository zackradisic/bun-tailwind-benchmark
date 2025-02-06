import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application powered by Bun, React, and TypeScript.</p>
      <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Click Me
      </button>
      <div className="mt-8 p-4 border-2 border-blue-500 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold">Server Response:</h2>
        <pre className="text-sm bg-gray-200 p-2 rounded">
          {`const response = await fetch('/api/data');\nconst data = await response.json();`}
        </pre>
      </div>
    </div>
  );
};

export default App;
