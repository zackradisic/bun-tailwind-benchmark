import "./style.css";
import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    setUsers(data);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-blue-600">User List</h1>
      </header>
      <main className="w-full max-w-md">
        <ul className="bg-white shadow-md rounded-lg">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id} className="p-4 border-b last:border-0 hover:bg-gray-200 transition">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </li>
            ))
          ) : (
            <li className="p-4 text-center text-gray-500">Loading users...</li>
          )}
        </ul>
      </main>
      <footer className="mt-8">
        <p className="text-gray-400">Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
