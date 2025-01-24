import React from 'react';

const App = () => {
  const fetchData = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun + React + TypeScript</h1>
      <p className="text-lg text-gray-700 mb-6">This is a demonstration of Bun's fullstack capabilities!</p>
      <button 
        className="px-6 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition duration-200"
        onClick={fetchData}
      >
        Fetch Users
      </button>
      <div className="mt-8 p-4 w-full max-w-md bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">User Data</h2>
        <pre className="mt-2 text-sm text-gray-600">
          {JSON.stringify([], null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
