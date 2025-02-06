import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
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
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-6 bg-white/10 border-b border-white/20">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            ⚡ Bun Fullstack Magic ⚡
          </h1>
        </div>
        <div className="p-8">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-bounce">
              <div className="w-6 h-6 bg-white/50 rounded-full"></div>
              <div className="w-6 h-6 bg-white/50 rounded-full"></div>
              <div className="w-6 h-6 bg-white/50 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user, index) => (
                <div 
                  key={user.id || index} 
                  className="bg-white/10 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                      {user.name?.[0] || '🚀'}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{user.name || 'Mystery User'}</h3>
                      <p className="text-sm text-white/70">{user.email || 'no-email@bun.sh'}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="text-center text-white/80 max-w-2xl">
        <p className="text-sm italic">
          Built with Bun 🧅 - Seamlessly connecting server and client with TypeScript, React, and pure simplicity!
        </p>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
