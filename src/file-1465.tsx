import "./style.css";
import React from "react";

const App: React.FC = () => {
  // Example state to demonstrate client-side functionality
  const [users, setUsers] = React.useState<any[]>([]);
  
  // Fetch users on component mount
  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 flex flex-col items-center justify-center py-10">
      <h1 className="text-white text-4xl font-bold mb-5">User List</h1>
      <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-md">
        <ul className="space-y-4">
          {users.map((user, index) => (
            <li key={index} className="p-3 border-b border-gray-300">
              <p className="text-lg font-semibold text-gray-800">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
