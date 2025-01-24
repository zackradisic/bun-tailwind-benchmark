import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8">
        <h1 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/5 transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold text-white mb-4">Server Power 🚀</h2>
            <pre className="text-sm text-gray-300 bg-black/30 p-4 rounded-lg">
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

          <div className="bg-white/10 rounded-xl p-6 border border-white/5 transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold text-white mb-4">Client Simplicity 💻</h2>
            <pre className="text-sm text-gray-300 bg-black/30 p-4 rounded-lg">
              {`const [users, setUsers] = useState([]);
useEffect(() => {
  fetch('/api/users')
    .then(res => res.json())
    .then(setUsers);
}, [])`}
            </pre>
          </div>
        </div>

        <div className="mt-8">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
              <div className="w-12 h-12 bg-green-400 rounded-full"></div>
              <div className="w-12 h-12 bg-red-400 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/10 transform transition-all hover:scale-105 hover:bg-white/30"
                >
                  <h3 className="text-xl font-semibold text-white">{user.name}</h3>
                  <p className="text-gray-200">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-center text-white/70 text-sm italic">
        Built with 💖 using Bun, React, and Tailwind
      </div>
    </div>
  );
}
