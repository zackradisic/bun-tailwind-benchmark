import React from 'react';

const App = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">User List</h1>
      <ul className="bg-white shadow-md rounded-lg w-full max-w-md">
        {users.map(user => (
          <li key={user.id} className="border-b last:border-b-0 p-4 hover:bg-gray-200 transition">
            <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
