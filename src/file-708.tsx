import "./style.css";
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/5 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Server</h2>
            <pre className="text-sm text-gray-200 overflow-x-auto">
              <code>
                {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await db.getUsers();
      return Response.json(users);
    }
  }
})`}
              </code>
            </pre>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 border border-white/5 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Client</h2>
            <pre className="text-sm text-gray-200 overflow-x-auto">
              <code>
                {`const [users, setUsers] = useState([]);
useEffect(() => {
  fetch('/api/users')
    .then(res => res.json())
    .then(setUsers);
}, [])`}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-white/10 rounded-xl p-6 border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
          {loading ? (
            <div className="flex justify-center items-center space-x-2 animate-pulse">
              <div className="w-4 h-4 bg-white/50 rounded-full"></div>
              <div className="w-4 h-4 bg-white/50 rounded-full"></div>
              <div className="w-4 h-4 bg-white/50 rounded-full"></div>
            </div>
          ) : (
            <ul className="space-y-2">
              {users.map(user => (
                <li 
                  key={user.id} 
                  className="bg-white/10 rounded-lg p-3 text-white hover:bg-white/20 transition-all"
                >
                  {user.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      <div className="text-center text-white/70 text-sm flex items-center space-x-2 justify-center">
        <span>⚡ Powered by</span>
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Bun
        </span>
      </div>
    </div>
  );
}
