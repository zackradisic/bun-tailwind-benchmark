import React, { useState, useEffect } from 'react';

export default function BunFullstackshowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-700 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center mb-6 text-white drop-shadow-lg tracking-tight">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server-Side</h2>
            <pre className="text-sm text-green-300 font-mono overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(userDatabase)
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Client-Side</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="h-12 w-12 bg-white/30 rounded-full"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-white/30 rounded w-3/4"></div>
                  <div className="h-4 bg-white/30 rounded w-1/2"></div>
                </div>
              </div>
            ) : (
              <ul className="space-y-2 text-white">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-white/20 rounded-lg p-3 hover:bg-white/40 transition-all duration-200 cursor-pointer"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://bun.sh" 
            className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/40 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Powered by Bun</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0S8.55 3.51 3 3.51C3 3.51 2.53 13.5 12 23c9.47-9.5 9-19.49 9-19.49C15.45 3.51 12 0 12 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
