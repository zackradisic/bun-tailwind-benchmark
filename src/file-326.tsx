import "./style.css";
import React from 'react';

const App: React.FC = () => {
  // Client-side Data Fetching
  const [users, setUsers] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Users List</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {users.map(user => (
            <li key={user.id} className="p-4 hover:bg-gray-100 transition duration-200">
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
      <footer className="mt-8 text-sm text-gray-600">
        &copy; 2023 My Application
      </footer>
    </div>
  );
};

export default App;
