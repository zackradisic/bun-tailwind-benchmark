import React from 'react';

const App = () => {
  // Client-side API request to fetch users
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-500 text-white p-4 rounded shadow-md">
        <h1 className="text-2xl font-bold">User List</h1>
      </header>
      <main className="mt-4 max-w-2xl w-full bg-white shadow-lg rounded-lg p-5">
        <ul className="list-disc list-inside">
          {users.map(user => (
            <li key={user.id} className="py-2 border-b border-gray-300">
              <span className="text-lg">{user.name}</span> - <span className="text-gray-600">{user.email}</span>
            </li>
          ))}
        </ul>
      </main>
      <footer className="mt-4 text-gray-600">
        <p>&copy; 2023 My Bun App</p>
      </footer>
    </div>
  );
};

export default App;
