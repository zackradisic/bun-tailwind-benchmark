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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8 w-full max-w-4xl">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
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

          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, idx) => (
                  <li 
                    key={idx} 
                    className="bg-white/10 p-2 rounded-lg text-white hover:bg-white/20 transition-all"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-white/80">
        <p className="text-sm flex items-center justify-center space-x-2">
          <span>⚡ Built with</span>
          <span className="font-bold text-white bg-black/20 px-2 py-1 rounded-full">
            Bun
          </span>
          <span>+ React + TypeScript</span>
        </p>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
