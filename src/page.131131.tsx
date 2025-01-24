import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch users', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl animate-pulse-slow">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <pre className="text-sm text-white/80 overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <pre className="text-sm text-white/80 overflow-x-auto">
              {`const [users, setUsers] = useState([]);
fetch('/api/users')
  .then(res => res.json())
  .then(data => setUsers(data))`}
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-white/10 rounded-2xl p-6 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            {loading ? 'Loading Users...' : 'Users'}
          </h2>
          
          {loading ? (
            <div className="grid grid-cols-3 gap-4 animate-pulse">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white/20 h-16 rounded-lg"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {users.map(user => (
                <div 
                  key={user.id} 
                  className="bg-white/20 rounded-lg p-4 text-white shadow-md hover:bg-white/30 transition-all"
                >
                  <p className="font-semibold">{user.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-center text-white/70 text-sm">
        Built with 🔥 Bun & React
      </div>
    </div>
  );
}
