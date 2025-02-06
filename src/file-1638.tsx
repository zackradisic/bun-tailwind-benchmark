import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, timeResponse] = await Promise.all([
          fetch('/api/users'),
          fetch('/api/time')
        ]);
        
        const userData = await usersResponse.json();
        const timeData = await timeResponse.json();
        
        setUsers(userData);
        setServerTime(timeData.time);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          ⚡ Bun Fullstack Magic ⚡
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Info</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2 text-blue-600">🕒</span>
                <span className="font-semibold">Server Time:</span> 
                <span className="ml-2 text-blue-700">{serverTime || 'Loading...'}</span>
              </p>
              <div className="h-0.5 bg-blue-200 my-2"></div>
              <p className="flex items-center">
                <span className="mr-2 text-blue-600">🌐</span>
                <span className="font-semibold">Environment:</span>
                <span className="ml-2 text-blue-700">Development</span>
              </p>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={user.id || index} 
                    className="bg-white rounded-lg p-2 shadow-sm flex items-center transform transition hover:scale-105 hover:bg-purple-100"
                  >
                    <span className="mr-2 text-purple-600">👤</span>
                    <span className="font-medium text-purple-800">{user.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with 🦊 Bun, ⚛️ React, and 💨 Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}
