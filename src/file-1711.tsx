import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(users => setData(users));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {data.length > 0 ? (
          <ul className="space-y-4">
            {data.map(user => (
              <li key={user.id} className="border-b border-gray-300 pb-2">
                <h2 className="text-xl text-gray-800">{user.name}</h2>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">ID: {user.id}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;
