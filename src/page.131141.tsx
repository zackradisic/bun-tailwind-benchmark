import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(new Date());

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
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-extrabold text-white tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
          <div className="text-2xl font-mono text-white/80">
            {time.toLocaleTimeString()}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-white/50 transition-all">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Server-Side Power 🚀
            </h2>
            {loading ? (
              <div className="animate-spin h-10 w-10 border-4 border-white/50 rounded-full border-t-white"></div>
            ) : (
              <div className="space-y-2">
                {users.map((user, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 p-3 rounded-lg text-white hover:bg-white/20 transition-all"
                  >
                    {user.name || 'Anonymous User'}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-white/50 transition-all">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Client-Side Interactivity 💡
            </h2>
            <div className="flex flex-col space-y-4">
              <button 
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transform active:scale-95 transition-all"
                onClick={() => alert('Bun makes fullstack development a breeze!')}
              >
                Click for Magic
              </button>
              <div className="text-white/80 text-sm">
                Powered by Bun, React & TypeScript
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
