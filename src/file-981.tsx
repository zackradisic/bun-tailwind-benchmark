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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Users List</h1>
      <button
        onClick={fetchData}
        className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
      >
        Fetch Users
      </button>
      <ul className="mt-4 p-4 border border-gray-300 rounded-lg shadow-lg">
        {/* Here you could map over fetched user data */}
        <li className="p-2 border-b last:border-b-0">User 1</li>
        <li className="p-2 border-b last:border-b-0">User 2</li>
        <li className="p-2 border-b last:border-b-0">User 3</li>
      </ul>
    </div>
  );
};

export default App;
