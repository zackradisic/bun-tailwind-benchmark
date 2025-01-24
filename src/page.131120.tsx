import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">Server-Side</h2>
            <pre className="text-sm text-green-300 overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await db.query("SELECT * FROM users");
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">Client-Side</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-white/30 rounded w-3/4"></div>
                </div>
              ) : (
                users.map((user, index) => (
                  <div 
                    key={index} 
                    className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-all duration-200 flex justify-between items-center"
                  >
                    <span className="text-white font-medium">{user.name}</span>
                    <span className="text-green-300 text-sm">{user.email}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-white/20 px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
            <span className="text-white font-semibold mr-2">Built with</span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-bold">
              Bun 🥟
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
