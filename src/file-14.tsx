import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-4xl w-full transform transition-all duration-500 hover:scale-105">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-8">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <pre className="text-sm text-green-300 font-mono">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith('/api/users')) {
      const users = await Bun.sql\`
        SELECT * FROM users
      \`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <pre className="text-sm text-blue-300 font-mono">
              {`const fetchUsers = async () => {
  const response = await fetch('/api/users');
  const userData = await response.json();
  setUsers(userData);
}`}
            </pre>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            {loading ? 'Loading Users...' : 'User List'}
          </h2>

          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-white/20 backdrop-blur-md rounded-xl p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <h3 className="text-xl font-semibold text-white">{user.name}</h3>
                  <p className="text-white/70">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <footer className="text-white/50 text-sm text-center">
        Built with 💖 using Bun, React, and Tailwind
      </footer>
    </div>
  );
};

export default BunFullstackShowcase;
