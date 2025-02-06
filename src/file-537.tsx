import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-white text-center mb-8 tracking-tight animate-pulse">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">Server Side</h2>
            <pre className="text-sm text-white/80 overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    const users = await Bun.sql\`
      SELECT * FROM users
    \`;
    return Response.json(users);
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">Client Side</h2>
            {isLoading ? (
              <div className="animate-spin w-12 h-12 border-4 border-white/50 border-t-white rounded-full mx-auto"></div>
            ) : (
              <ul className="space-y-2">
                {users.map(user => (
                  <li 
                    key={user.id} 
                    className="text-white bg-white/20 rounded-lg px-4 py-2 hover:bg-white/40 transition-all"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-white/70 text-sm">
        Built with 💖 using Bun, React & TypeScript
      </div>
    </div>
  );
}
