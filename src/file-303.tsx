import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-white text-center mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Server State</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-bounce">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="text-white bg-white/20 rounded-md p-2 hover:bg-white/40 transition-all"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-white mb-4">Client Interaction</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCount(count + 1)}
                className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/40 transition-all text-2xl font-bold"
              >
                Clicks: {count}
              </button>
              <div className={`text-4xl transition-all ${count > 10 ? 'text-green-400 animate-bounce' : 'text-white'}`}>
                {count > 10 ? '🎉' : '👆'}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="text-white/70 text-sm text-center">
        Built with 🔥 Bun, React & TypeScript
      </footer>
    </div>
  );
}
