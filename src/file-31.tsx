import "./style.css";
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-6 tracking-tight drop-shadow-lg animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-inner">
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

          <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            {loading ? (
              <div className="flex justify-center items-center animate-bounce text-white">
                Loading...
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white/5 rounded-lg p-3 text-white hover:bg-white/10 transition-all duration-200"
                  >
                    {user.name || 'User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg">
            Build with Bun
          </button>
        </div>
      </div>

      <div className="text-white/50 text-sm text-center">
        Fast. Simple. Fullstack. 🚀
      </div>
    </div>
  );
}
