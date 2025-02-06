import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8 w-full max-w-4xl transform transition-all hover:scale-[1.02]">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700 mb-8 animate-pulse">
          ⚡ Bun Fullstack Magic ⚡
        </h1>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
          <div className="bg-white/10 rounded-2xl p-6 space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 Server Side</h2>
            <pre className="bg-black/30 text-green-300 rounded-lg p-4 overflow-x-auto text-sm">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">💻 Client Side</h2>
            {isLoading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              </div>
            ) : (
              <div className="space-y-2">
                {users.map((user, index) => (
                  <div 
                    key={index} 
                    className="bg-white/20 rounded-lg p-3 flex items-center space-x-4 transform transition-all hover:scale-[1.02] hover:bg-white/30"
                  >
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{user.name}</p>
                      <p className="text-blue-200 text-sm">{user.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-white/70 text-sm flex items-center space-x-2 justify-center">
        <span>Built with</span>
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700">
          Bun
        </span>
        <span>+</span>
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
          React
        </span>
      </div>
    </div>
  );
}
