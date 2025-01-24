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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-blue-600">Welcome to My Bun App!</h1>
        <p className="mt-2 text-center text-gray-600">Fetching user data from the server...</p>
        <button 
          onClick={fetchData} 
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Fetch Users
        </button>
      </div>
      <footer className="mt-4 text-gray-500 text-sm">
        Powered by Bun, React, and TypeScript
      </footer>
    </div>
  );
};

export default App;
