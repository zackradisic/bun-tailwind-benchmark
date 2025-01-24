import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">User List</h1>
      <ul className="bg-white shadow-md rounded-lg p-5">
        {users.length === 0 ? (
          <li className="text-gray-500">Loading...</li>
        ) : (
          users.map((user) => (
            <li key={user.id} className="p-2 border-b last:border-b-0 hover:bg-gray-100 transition-all">
              <span className="font-semibold text-gray-800">{user.name}</span> - {user.email}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
