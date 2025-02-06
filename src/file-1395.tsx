import "./style.css";
import React from 'react';

const App: React.FC = () => {
  // Fetch data from the server
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">User List</h1>
      <ul className="bg-white shadow-md rounded-lg w-96">
        {users.length === 0 ? (
          <li className="p-4 text-gray-500">Loading users...</li>
        ) : (
          users.map((user: any) => (
            <li
              key={user.id}
              className="p-4 border-b border-gray-200 hover:bg-gray-100 transition duration-200"
            >
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
