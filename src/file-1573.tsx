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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 bg-white/10 border-b border-white/20">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight">
            🚀 Bun Fullstack Magic
          </h1>
        </div>

        <div className="p-8">
          {loading ? (
            <div className="flex items-center justify-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-white/30 rounded-full"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-white/30 rounded w-3/4"></div>
                <div className="h-4 bg-white/20 rounded w-1/2"></div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user, index) => (
                <div 
                  key={user.id || index} 
                  className="bg-white/10 rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:bg-white/20"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {user.name || 'Anonymous User'}
                  </h3>
                  <p className="text-white/70">
                    {user.email || 'No email provided'}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 bg-white/10 border-t border-white/20 text-center">
          <p className="text-sm text-white/50">
            Built with 💖 using Bun, React, and Tailwind
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <pre className="bg-black/50 text-white/80 p-4 rounded-lg text-sm font-mono max-w-3xl mx-auto">
          {`// Server-side Bun.serve() magic 
Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
        </pre>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
