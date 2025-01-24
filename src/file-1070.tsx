import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-800 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">User List</h1>
      <ul className="w-full max-w-md bg-white text-black rounded-lg shadow-lg p-4">
        {users.length > 0 ? (
          users.map((user: { id: number, name: string }) => (
            <li key={user.id} className="border-b border-gray-300 py-2 text-lg">
              {user.name}
            </li>
          ))
        ) : (
          <li className="text-center">Loading users...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
