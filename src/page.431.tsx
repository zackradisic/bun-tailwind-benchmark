import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">User List</h1>
      <button
        className="mb-5 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition"
        onClick={() => setUsers([])}
      >
        Clear Users
      </button>
      <ul className="list-disc">
        {users.length > 0 ? (
          users.map((user: any) => (
            <li key={user.id} className="p-2 border-b border-gray-300">
              {user.name}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No users found.</li>
        )}
      </ul>
    </div>
  );
};

export default App;
