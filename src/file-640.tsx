import "./style.css";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 w-full text-center">
        <h1 className="text-3xl font-bold">User List</h1>
      </header>
      <main className="flex flex-col items-center mt-4">
        <ul className="space-y-4">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id} className="bg-white shadow-md rounded-lg p-4 w-80">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-700">Email: {user.email}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-600">Loading users...</p>
          )}
        </ul>
      </main>
      <footer className="mt-4">
        <p className="text-gray-500">© 2023 Bun App</p>
      </footer>
    </div>
  );
};

export default App;
