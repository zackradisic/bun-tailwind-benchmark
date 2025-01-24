import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-white mb-8">Build your fullstack application effortlessly.</p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 text-lg font-semibold text-white bg-blue-800 rounded-lg hover:bg-blue-700">Get Started</button>
        <button className="px-6 py-2 text-lg font-semibold text-white bg-blue-800 rounded-lg hover:bg-blue-700">Learn More</button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white">API Response:</h2>
        <div className="w-full max-w-md p-4 mt-2 bg-white rounded-lg shadow-md">
          <pre className="text-sm text-gray-700">{"{\n  \"message\": \"Hello from Bun!\"\n}"}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
