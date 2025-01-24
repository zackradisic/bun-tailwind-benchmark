import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([]);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users');
        const userData = await userResponse.json();
        setUsers(userData);

        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.json();
        setServerTime(timeData.time);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          Bun Fullstack Magic 🚀
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Details</h2>
            <div className="space-y-2">
              <p className="text-lg font-medium text-blue-600">
                Current Time: 
                <span className="ml-2 bg-blue-200 px-2 py-1 rounded-full">
                  {serverTime || 'Loading...'}
                </span>
              </p>
              <div className="h-1 bg-blue-300 w-full rounded-full"></div>
              <p className="text-sm text-blue-500 italic">
                Powered by Bun's ultra-fast runtime
              </p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">User Data</h2>
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {users.length === 0 ? (
                <li className="text-purple-500 animate-pulse">
                  Loading users...
                </li>
              ) : (
                users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-purple-200 px-4 py-2 rounded-lg text-purple-800 flex justify-between items-center hover:bg-purple-300 transition-colors"
                  >
                    <span>{user.name}</span>
                    <span className="text-sm text-purple-600">{user.email}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-green-100 border-2 border-green-300 px-6 py-3 rounded-full text-green-700 font-semibold shadow-md hover:bg-green-200 transition-all">
            Built with Bun ✨ React ⚛️ TypeScript 📘
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-500 text-center max-w-xl">
        This demo showcases the simplicity of building fullstack applications with Bun, 
        demonstrating seamless server-client communication and modern web technologies.
      </div>
    </div>
  );
}
