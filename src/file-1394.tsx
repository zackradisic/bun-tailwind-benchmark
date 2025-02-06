import "./style.css";
import React, { useState } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server-Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm text-blue-900">
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

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client-Side</h2>
            <button 
              onClick={fetchUsers}
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg transform transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Fetch Users'}
            </button>
          </div>
        </div>

        {users.length > 0 && (
          <div className="mt-8 bg-green-50 p-6 rounded-xl border-2 border-green-200 animate-fade-in">
            <h3 className="text-2xl font-bold text-green-700 mb-4">User List</h3>
            <ul className="space-y-2">
              {users.map((user, index) => (
                <li 
                  key={index} 
                  className="bg-white p-3 rounded-lg shadow-md hover:bg-green-100 transition-colors"
                >
                  {user}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="text-center text-sm text-gray-500">
        Built with 🐰 Bun, React & TypeScript
      </div>
    </div>
  );
};

export default BunFullstackDemo;
