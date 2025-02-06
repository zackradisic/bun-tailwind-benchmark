import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Bun Fullstack Magic ✨
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-purple-700">Server-Side</h2>
            <pre className="bg-gray-200 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-blue-700">Client-Side</h2>
            <pre className="bg-gray-200 p-4 rounded-lg text-sm overflow-x-auto">
              {`const fetchUsers = async () => {
  const response = await fetch('/api/users');
  const data = await response.json();
  setUsers(data);
}`}
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-700 mb-4">User List</h2>
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              <p className="text-gray-600">Loading users...</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-4"
                >
                  <span className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                    {user.id}
                  </span>
                  <span className="text-gray-800 font-semibold">{user.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      <div className="text-center text-white text-sm opacity-70">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
