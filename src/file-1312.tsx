import "./style.css";
import React, { useState } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Server</h2>
            <pre className="text-sm text-gray-700 bg-blue-100 p-4 rounded-lg">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`
        SELECT * FROM users
      \`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Client</h2>
            <button 
              onClick={fetchUsers}
              disabled={loading}
              className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                loading 
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 active:scale-95'
              }`}
            >
              {loading ? 'Fetching...' : 'Fetch Users'}
            </button>
          </div>
        </div>

        {users.length > 0 && (
          <div className="mt-8 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Users</h3>
            <ul className="space-y-2">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-700">{user.name}</span>
                  <span className="text-sm text-gray-500">ID: {user.id}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="text-center text-sm text-gray-500 opacity-70">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  );
}
