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
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-2">Building fullstack applications has never been easier.</p>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition duration-300"
        onClick={fetchData}
      >
        Fetch Users
      </button>
      <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-2">Fetched Data:</h2>
        <pre className="text-gray-800"></pre>
      </div>
    </div>
  );
};

export default App;
