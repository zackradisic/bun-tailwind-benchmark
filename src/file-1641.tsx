import "./style.css";
import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="shadow-lg rounded-lg p-6 bg-white max-w-md w-full">
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="p-4 border border-gray-300 rounded-lg">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-700">Email: {user.email}</p>
              <p className="text-gray-500">Username: {user.username}</p>
            </li>
          ))}
        </ul>
      </div>
      <footer className="mt-10">
        <p className="text-gray-500">Powered by Bun & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
