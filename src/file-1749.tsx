import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">User List</h1>
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6">
        {users.length > 0 ? (
          <ul className="list-disc pl-5">
            {users.map((user) => (
              <li key={user.id} className="text-lg text-gray-700">{user.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Loading users...</p>
        )}
      </div>
    </div>
  );
}

export default App;
