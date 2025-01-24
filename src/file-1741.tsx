import React from 'react';

const App: React.FC = () => {
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-bold mb-5 text-blue-600">User List</h1>
      <ul className="bg-white shadow-md rounded-lg w-full max-w-md">
        {users.length === 0 ? (
          <li className="p-5 text-center text-gray-500">Loading...</li>
        ) : (
          users.map((user: any) => (
            <li key={user.id} className="p-4 border-b border-gray-200 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">{user.name}</span>
                <span className="text-gray-400">{user.email}</span>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
