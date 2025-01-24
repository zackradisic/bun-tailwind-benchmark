import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white w-full p-4 text-center">
        <h1 className="text-2xl font-bold">Bun + React + TailwindCSS</h1>
      </header>
      <main className="mt-6 p-4">
        <h2 className="text-xl font-semibold mb-4">User List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="p-6 max-w-sm bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-medium">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="w-full p-4 text-center bg-gray-800 text-white mt-6">
        <p>&copy; 2023 Bun Fullstack App</p>
      </footer>
    </div>
  );
};

export default App;
