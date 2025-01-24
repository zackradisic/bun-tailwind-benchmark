import React from "react";

const FastSimpleApp: React.FC = () => {
  // A quick API fetch to demonstrate server-client interaction
  const [users, setUsers] = React.useState<Array<{ id: number; name: string }>>([]);

  React.useEffect(() => {
    // Fetch users from the server
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Bun's Fullstack App!
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Fast and Simple Fullstack Development with Bun, React, and TypeScript.
      </p>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">User List:</h2>
      <ul className="bg-white shadow-md rounded-lg w-1/2">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="p-4 border-b border-gray-200">
              {user.name}
            </li>
          ))
        ) : (
          <li className="p-4 text-center text-gray-400">No users found!</li>
        )}
      </ul>
    </div>
  );
};

export default FastSimpleApp;
