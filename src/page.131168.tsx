import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 w-full max-w-4xl">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <pre className="text-sm text-white/80 overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <div className="space-y-2">
              {loading ? (
                <div className="animate-pulse bg-white/30 h-8 rounded-lg"></div>
              ) : (
                users.map((user, index) => (
                  <div 
                    key={index} 
                    className="bg-white/20 p-3 rounded-lg text-white hover:bg-white/30 transition-all duration-200"
                  >
                    {user.name || 'Anonymous User'}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-white/70">
        <p className="flex items-center justify-center space-x-2">
          <span className="text-3xl">🚀</span>
          <span className="font-semibold">Built with Bun, React & TypeScript</span>
          <span className="text-3xl">⚡</span>
        </p>
      </div>
    </div>
  );
}
