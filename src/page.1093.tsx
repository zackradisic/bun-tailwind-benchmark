import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Welcome to My Bun + Tailwind App!</h1>
        <p className="text-gray-700 mb-6 text-center">
          This is a demonstration of using <span className="font-semibold">Bun</span> with <span className="font-semibold">Tailwind CSS</span> for building fast fullstack applications.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <button className="bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 py-2">
            Fetch Data
          </button>
          <div className="border-t border-gray-300 pt-4">
            <p className="text-sm text-gray-600">Data will appear here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
