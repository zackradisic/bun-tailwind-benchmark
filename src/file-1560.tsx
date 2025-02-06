import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            Bun Full-Stack Magic ✨
          </h1>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">🚀 Client Side</h2>
              <p className="text-gray-700">
                React component rendering dynamic user data fetched from Bun server
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">⚡ Server Side</h2>
              <p className="text-gray-700">
                Bun server handling API requests with zero-config bundling
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gray-100 rounded-xl p-6">
            {loading ? (
              <div className="flex justify-center items-center space-x-4 animate-pulse">
                <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-400 rounded-full"></div>
                <div className="w-12 h-12 bg-green-400 rounded-full"></div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold text-center mb-4">Users</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {users.map((user, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-4 rounded-lg shadow-md hover:bg-blue-50 transition-colors"
                    >
                      <p className="font-medium text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          Built with 💖 using Bun, React & TypeScript
        </div>
      </div>
    </div>
  );
}
