import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-white drop-shadow-lg animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Server Magic 🚀</h2>
            <pre className="text-sm text-white/80 bg-black/20 p-4 rounded-lg overflow-x-auto">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(
        await Bun.sql\`SELECT * FROM users\`
      );
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Client Power 💻</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                <div className="w-4 h-4 bg-white/50 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white/20 p-3 rounded-lg text-white hover:bg-white/30 transition-all"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-white/70 text-sm max-w-xl bg-white/10 p-4 rounded-xl border border-white/20">
        Built with <span className="font-bold text-white">Bun</span> • 
        React • 
        TypeScript • 
        <span className="font-bold text-white">Tailwind</span>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
