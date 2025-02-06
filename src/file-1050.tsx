import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-8 w-full max-w-4xl transform transition-all hover:scale-[1.02]">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg animate-pulse">
          Bun Fullstack Playground
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/5 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2">
              Server-Side 🚀
            </h2>
            <pre className="text-sm text-green-300 font-mono overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 border border-white/5 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2">
              Client-Side 💻
            </h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2 text-white">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-all"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-center text-white/70 text-sm flex space-x-4">
        <span>🌟 Built with Bun</span>
        <span>🚀 React + TypeScript</span>
        <span>💨 Tailwind CSS</span>
      </div>
    </div>
  );
}
