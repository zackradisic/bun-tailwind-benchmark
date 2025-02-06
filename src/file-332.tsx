import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstack() {
  const [users, setUsers] = useState([]);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg animate-pulse">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Features</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Lightning Fast Bundling</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Integrated HTTP Server</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">User List</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 text-white animate-pulse">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2 max-h-48 overflow-y-auto">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white/10 rounded-lg p-2 text-white/80 hover:bg-white/20 transition-colors"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-center text-white/60 text-sm italic">
        Built with ❤️ using Bun, React & TypeScript
      </div>
    </div>
  );
}
