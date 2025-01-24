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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun's Fullstack App!</h1>
      <p className="text-lg text-gray-800">This is a demo of Bun's Tailwind integration.</p>
      <button
        onClick={fetchData}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Fetch Users
      </button>
      <div className="mt-4 p-4 border border-gray-300 rounded shadow-lg">
        <h2 className="text-2xl font-semibold">User Data:</h2>
        <pre className="text-sm text-gray-700">{JSON.stringify([], null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
