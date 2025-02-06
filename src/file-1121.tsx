import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, timeResponse] = await Promise.all([
          fetch('/api/users'),
          fetch('/api/time')
        ]);
        const usersData = await usersResponse.json();
        const timeData = await timeResponse.json();
        
        setUsers(usersData);
        setServerTime(timeData.time);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Playground
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-xl p-6 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-purple-300 pb-2">
              Server Details
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-purple-200 font-semibold">Server Time:</span>
                <span className="text-white font-mono bg-purple-700/50 px-3 py-1 rounded-full">
                  {loading ? 'Loading...' : serverTime}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-purple-200 font-semibold">Runtime:</span>
                <span className="text-white bg-blue-600/50 px-3 py-1 rounded-full">
                  Bun.js
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-purple-300 pb-2">
              Users 
              {loading && (
                <span className="ml-2 text-sm text-purple-300 animate-pulse">
                  Loading...
                </span>
              )}
            </h2>
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="bg-white/10 hover:bg-white/20 transition-all duration-200 rounded-lg p-2 flex justify-between items-center"
                >
                  <span className="text-white">{user.name}</span>
                  <span className="text-purple-300 text-sm">ID: {user.id}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://bun.sh" 
            target="_blank" 
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center space-x-2 transform hover:-translate-y-1 hover:scale-110"
          >
            <span>Powered by Bun</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              <path d="M12 5l-6 6 1.5 1.5L11 8.25V19h2V8.25l3.5 3.25L18 11l-6-6z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
