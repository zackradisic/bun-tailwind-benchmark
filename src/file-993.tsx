import "./style.css";
import React from "react";

const TailwindApp: React.FC = () => {
  const fetchData = async () => {
    const response = await fetch("/api/users");
    if (!response.ok) return [];
    return response.json();
  };

  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetchData().then(setUsers);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">User List</h1>
      <div className="flex flex-col space-y-4">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Loading users...</p>
        )}
      </div>
    </div>
  );
};

export default TailwindApp;
