import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const userData = await response.json();
      setUsers(userData);
    } catch (error) {
      console.error('Failed to fetch users', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight">
            🚀 Bun Fullstack Magic
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Side</h2>
              <pre className="text-sm text-blue-600 bg-blue-100 p-4 rounded-lg">
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
            
            <div className="bg-purple-50 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Side</h2>
              <button 
                onClick={fetchUsers}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold transform transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Fetch Users'}
              </button>
            </div>
          </div>

          {users.length > 0 && (
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Users</h3>
              <div className="grid grid-cols-3 gap-4">
                {users.map((user: any) => (
                  <div key={user.id} className="bg-gray-100 rounded-lg p-4 shadow-sm hover:bg-gray-200 transition-colors">
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-gray-100 p-4 text-center text-sm text-gray-500">
          Built with 💨 Bun, React, & TypeScript
        </div>
      </div>
    </div>
  );
}
