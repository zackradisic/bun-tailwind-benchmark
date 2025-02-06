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
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">User List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-b border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border-b border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border-b border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border-b border-gray-300 px-4 py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
