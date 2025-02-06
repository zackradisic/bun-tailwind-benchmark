import "./style.css";
import { useEffect, useState } from 'react';

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
    <div className="min-h-screen bg-white p-5">
      <header className="bg-blue-500 p-4 text-white text-center rounded">
        <h1 className="text-3xl font-bold">User Dashboard</h1>
      </header>
      <main className="mt-5">
        <h2 className="text-2xl mb-4">Users List</h2>
        <ul className="space-y-3">
          {users.map((user) => (
            <li key={user.id} className="border p-3 rounded shadow-md bg-gray-50">
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-700">{user.email}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer className="mt-10 text-center">
        <p className="text-gray-500 text-sm">Powered by Bun</p>
      </footer>
    </div>
  );
};

export default App;
