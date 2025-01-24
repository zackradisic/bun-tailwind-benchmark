import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application built using Bun and React.</p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">
        Click Me
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Server API Response:</h2>
        <div className="mt-2 p-4 bg-white border rounded shadow-md">
          <pre className="text-sm text-gray-600" id="api-response">
            {/* API response will be displayed here */}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
