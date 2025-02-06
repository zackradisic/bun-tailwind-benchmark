import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackshowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-white drop-shadow-lg animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 Server Side</h2>
            <pre className="text-sm text-gray-200 bg-black/30 p-4 rounded-lg overflow-auto">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith('/api/users')) {
      const users = await Bun.sql\`
        SELECT * FROM users
      \`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">⚛️ Client Side</h2>
            <pre className="text-sm text-gray-200 bg-black/30 p-4 rounded-lg overflow-auto">
              {`const [users, setUsers] = useState([])
useEffect(() => {
  fetch('/api/users')
    .then(res => res.json())
    .then(setUsers)
})`}
            </pre>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Users Fetched: {isLoading ? 'Loading...' : users.length}
          </h2>
          
          {isLoading ? (
            <div className="flex justify-center space-x-2 animate-pulse">
              {[1, 2, 3].map((_, i) => (
                <div 
                  key={i} 
                  className="w-4 h-4 bg-white/50 rounded-full"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {users.map((user) => (
                <div 
                  key={user.id} 
                  className="bg-white/20 rounded-xl p-4 text-white transform transition-all hover:scale-105 hover:bg-white/30"
                >
                  <p className="font-semibold">ID: {user.id}</p>
                  <p>{user.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="text-center text-white/70 text-sm">
        Built with 💖 using Bun, React & TypeScript
      </div>
    </div>
  );
}
