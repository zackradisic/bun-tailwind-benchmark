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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Side</h2>
            <pre className="text-sm bg-blue-100 p-4 rounded-lg overflow-x-auto">
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

          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Side</h2>
            <button 
              onClick={fetchUsers}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              {loading ? 'Loading...' : 'Fetch Users'}
            </button>
          </div>
        </div>

        {users.length > 0 && (
          <div className="mt-8 bg-gray-50 rounded-xl p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Users</h3>
            <ul className="space-y-2">
              {users.map((user, index) => (
                <li key={index} className="bg-white p-3 rounded-lg shadow-sm hover:bg-gray-100 transition-colors">
                  {user}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="text-center text-sm text-gray-500 opacity-75">
        Built with 🥟 Bun, React & TypeScript
      </div>
    </div>
  );
};

export default BunFullstackDemo;
