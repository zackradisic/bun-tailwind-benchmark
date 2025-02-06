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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Users List</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2 text-center">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="border border-gray-300 px-4 py-2 text-center">
                Loading users...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
