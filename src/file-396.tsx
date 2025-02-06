import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackshowcase: React.FC = () => {
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
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight uppercase">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-white/30 rounded-full"></div>
              <div className="w-64 h-8 bg-white/20 rounded"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 border border-white/20 rounded-xl p-4 transform transition-all hover:scale-105 hover:bg-white/20"
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
            Built with 🔥 Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackshowcase;
