import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">User List</h1>
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-5">
        <h2 className="text-xl mb-3 font-semibold">Users</h2>
        <ul className="list-disc pl-5">
          {users.map((user) => (
            <li key={user.id} className="text-lg text-gray-700">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <footer className="mt-5 text-gray-500 text-sm">Powered by Bun & TailwindCSS</footer>
    </div>
  );
};

export default App;
