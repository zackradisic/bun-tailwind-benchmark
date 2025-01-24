import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack apps has never been easier.</p>
      <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        Get Started
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">API Fetch Example</h2>
        <pre className="bg-white border p-4 rounded-lg shadow-md mt-2">
          <code className="text-sm text-gray-600">
            {`async function fetchData() {
  const response = await fetch('/api/users');
  const data = await response.json();
  console.log(data);
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default App;
