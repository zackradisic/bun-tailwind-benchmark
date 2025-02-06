import "./style.css";
import React from "react";

const App = () => {
  const [data, setData] = React.useState(null);

  // Fetching data from the Bun API
  React.useEffect(() => {
    fetch('/api/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(users => setData(users))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="bg-white shadow rounded-lg p-6 w-full max-w-md">
        {data ? (
          <ul className="divide-y divide-gray-200">
            {data.map(user => (
              <li key={user.id} className="py-3 flex justify-between">
                <span className="text-gray-700">{user.name}</span>
                <span className="text-gray-500">{user.email}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Loading users...</p>
        )}
      </div>
    </div>
  );
};

export default App;
