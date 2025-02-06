import "./style.css";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <h1 className="text-5xl font-bold text-white mb-4">Bun + Tailwind Integration Demo</h1>
      <p className="text-lg text-white mb-8">Fetch users from the server with Bun!</p>
      <button 
        onClick={fetchData} 
        className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition ease-in-out duration-300"
      >
        Fetch Users
      </button>
      <div className="mt-6 p-4 bg-white rounded shadow-lg w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">Users:</h2>
        <ul id="user-list" className="list-disc pl-5 text-gray-700"></ul>
      </div>
    </div>
  );
};

export default App;
