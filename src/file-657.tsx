import React from 'react';

const App: React.FC = () => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(users => setData(users))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Users List</h1>
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-4">
          {data.length > 0 ? (
            data.map(user => (
              <li key={user.id} className="p-4 border rounded-lg hover:bg-blue-50 transition">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-500">Loading users...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
