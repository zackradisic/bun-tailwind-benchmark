import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">User List</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border-b px-6 py-4 text-left">ID</th>
            <th className="border-b px-6 py-4 text-left">Name</th>
            <th className="border-b px-6 py-4 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border-b px-6 py-4">{user.id}</td>
              <td className="border-b px-6 py-4">{user.name}</td>
              <td className="border-b px-6 py-4">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
