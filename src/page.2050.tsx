import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Users List</h1>
      <div className="w-full max-w-lg">
        <ul className="bg-white shadow-lg rounded-lg">
          {users.map((user) => (
            <li key={user.id} className="p-4 border-b last:border-b-0 hover:bg-gray-100">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-700">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
