import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([]);
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
        <div className="p-6 bg-white/10">
          <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-8">
            Bun Fullstack Magic ✨
          </h1>
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
              <div className="w-12 h-12 bg-purple-400 rounded-full"></div>
              <div className="w-12 h-12 bg-pink-400 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/10 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <h2 className="text-xl font-bold text-blue-300 mb-2">{user.name}</h2>
                  <p className="text-sm text-purple-200">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 bg-white/10 text-center">
          <p className="text-sm text-white/70 flex items-center justify-center space-x-2">
            <span>🚀 Built with</span>
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Bun
            </span>
            <span>+</span>
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              React
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
