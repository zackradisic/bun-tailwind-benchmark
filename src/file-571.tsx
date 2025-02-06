import "./style.css";
import React from 'react';

const App = () => {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    fetch('/api/users') // Fetching data from the server
      .then(response => response.json())
      .then(users => setData(users));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-2">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Users</h2>
        {data ? (
          <ul className="space-y-2">
            {data.map((user: any) => (
              <li key={user.id} className="bg-gray-200 p-4 rounded-md shadow-inner">
                <span className="font-medium text-black">{user.name}</span>
                <span className="text-gray-600"> - {user.email}</span>
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
