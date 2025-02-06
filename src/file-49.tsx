import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg animate-pulse">
            🚀 Bun Fullstack Magic
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-white">Server Side</h2>
              <pre className="text-left text-sm text-white/80 bg-black/20 p-4 rounded-lg">
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
            <div className="bg-white/10 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-white">Client Side</h2>
              {loading ? (
                <div className="animate-spin w-16 h-16 border-4 border-white/50 border-t-white rounded-full mx-auto"></div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-white/20 p-3 rounded-lg text-white hover:bg-white/30 transition-all"
                    >
                      {user.name || 'Unknown User'}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white/10 p-4 text-center text-white">
          <p className="text-sm font-light">
            Built with 💖 using Bun, React, and Tailwind
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
