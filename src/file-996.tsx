import React from "react";

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="w-full max-w-md">
        <ul className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
          {users.length ? (
            users.map((user) => (
              <li key={user.id} className="p-4 hover:bg-gray-50">
                <h2 className="text-lg font-medium text-gray-800">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </li>
            ))
          ) : (
            <li className="p-4 text-gray-500">Loading...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
