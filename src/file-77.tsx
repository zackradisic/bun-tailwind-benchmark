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
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-4xl transform transition-all hover:scale-105">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-white drop-shadow-lg">
          ⚡ Bun Fullstack Magic ⚡
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 Server</h2>
            <pre className="text-sm text-white/80 overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.includes('/api/users')) {
      return Response.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
      ]);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">⚛️ Client</h2>
            <pre className="text-sm text-white/80 overflow-x-auto">
              {`function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);
}`}
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-white/10 rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">👥 Fetched Users</h2>
          {loading ? (
            <div className="flex justify-center items-center space-x-3 animate-pulse">
              <div className="w-4 h-4 bg-white/50 rounded-full"></div>
              <div className="w-4 h-4 bg-white/50 rounded-full"></div>
              <div className="w-4 h-4 bg-white/50 rounded-full"></div>
            </div>
          ) : (
            <ul className="space-y-2">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="bg-white/20 p-3 rounded-lg text-white flex justify-between hover:bg-white/30 transition-all"
                >
                  <span>{user.name}</span>
                  <span className="text-white/70">ID: {user.id}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-center text-white/70 text-sm max-w-xl text-balance">
        Built with Bun's lightning-fast runtime, seamless fullstack development, and React's elegant component architecture. 
        No complexity, just pure productivity! 🔥
      </div>
    </div>
  );
}
