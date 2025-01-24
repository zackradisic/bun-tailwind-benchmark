import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-white mb-8">
        This is an example of a fullstack application powered by Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Client Part</h2>
          <p className="text-gray-700">This component uses Tailwind classes to define styles directly.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Server Part</h2>
          <p className="text-gray-700">
            The API is handled by Bun's server, enabling seamless data fetching with TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
