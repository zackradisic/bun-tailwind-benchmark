import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
        <ul className="bg-white shadow-md rounded-lg p-5 max-w-lg mx-auto">
          {users.length === 0 ? (
            <li className="text-gray-500">Loading...</li>
          ) : (
            users.map((user: any) => (
              <li
                key={user.id}
                className="border-b last:border-b-0 py-2 text-lg text-gray-800"
              >
                {user.name}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
