import React from 'react';

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-4">Users List</h1>
        <ul className="space-y-2">
          <li className="bg-blue-100 p-3 rounded">User 1</li>
          <li className="bg-blue-100 p-3 rounded">User 2</li>
          <li className="bg-blue-100 p-3 rounded">User 3</li>
        </ul>
        <button 
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={fetchUsers}
        >
          Fetch Users
        </button>
      </div>
    </div>
  );
};

export default App;
