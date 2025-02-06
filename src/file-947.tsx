import "./style.css";
import React from 'react';

const App = () => {
  const fetchUserData = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700">Fetching user data from the server...</p>
      <button 
        onClick={fetchUserData} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition">
        Fetch Users
      </button>
      <div className="mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">User Data:</h2>
        <pre className="text-sm text-gray-700"></pre>
      </div>
    </div>
  );
};

export default App;
