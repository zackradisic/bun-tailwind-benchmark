import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">User List</h1>
      <ul className="bg-white shadow-md rounded-lg p-6">
        {users.length > 0 ? (
          users.map((user) => (
            <li
              key={user.id}
              className="p-4 mb-2 border-b border-gray-300 last:border-b-0"
            >
              <span className="font-semibold">{user.name}</span>
              <span className="text-gray-500"> - {user.email}</span>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No users found</li>
        )}
      </ul>
    </div>
  );
};

export default App;
