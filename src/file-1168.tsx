import "./style.css";
import React from "react";

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6">User List</h1>
      <div className="bg-white text-black p-4 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Fetched Users</h2>
        <ul className="list-disc pl-5">
          {users.map(user => (
            <li key={user.id} className="mb-2">
              <span className="font-medium">{user.name}</span> - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
