import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([]);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-6 tracking-tight drop-shadow-lg">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <pre className="text-sm text-green-300 overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-white/30 h-12 w-12"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-white/30 rounded w-3/4"></div>
                  <div className="h-4 bg-white/30 rounded w-1/2"></div>
                </div>
              </div>
            ) : (
              <ul className="space-y-2 max-h-64 overflow-y-auto">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white/20 rounded-lg p-3 text-white hover:bg-white/40 transition-colors"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-110 shadow-lg">
            Load More Users
          </button>
        </div>
      </div>

      <footer className="text-white/70 text-sm text-center">
        Built with ❤️ using Bun, React & TypeScript
      </footer>
    </div>
  );
}
