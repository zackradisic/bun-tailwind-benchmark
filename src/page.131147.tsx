import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm text-blue-900 overflow-x-auto">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client</h2>
            <pre className="bg-purple-100 p-4 rounded-lg text-sm text-purple-900 overflow-x-auto">
              {`const App = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);
  
  return <UserList users={users} />;
}`}
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-green-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Users</h2>
          {loading ? (
            <div className="flex justify-center items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-green-600"></div>
              <p className="text-green-700">Loading users...</p>
            </div>
          ) : (
            <ul className="space-y-2">
              {users.map((user, index) => (
                <li 
                  key={index} 
                  className="bg-white p-3 rounded-lg shadow-sm transition-all hover:bg-green-100 hover:shadow-md"
                >
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        Built with 🚀 Bun + React + TypeScript + Tailwind
      </div>
    </div>
  );
}
