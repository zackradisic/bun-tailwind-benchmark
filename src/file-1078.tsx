import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">User List</h1>
      <ul className="bg-white shadow-md rounded-lg w-full max-w-lg">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="border-b border-gray-200 p-4 hover:bg-gray-100 transition duration-300">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500">No users found.</li>
        )}
      </ul>
    </div>
  );
};

export default App;
