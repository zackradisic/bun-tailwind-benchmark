import React from 'react';

const App: React.FC = () => {
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
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun + React + TypeScript</h1>
      <p className="text-lg text-gray-700 mb-6">Fetch data from the server effortlessly!</p>
      <button
        onClick={fetchData}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition duration-200 hover:bg-blue-600"
      >
        Fetch Users
      </button>
    </div>
  );
};

export default App;
