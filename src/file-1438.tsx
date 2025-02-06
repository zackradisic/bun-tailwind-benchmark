import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8 text-white">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-bold text-blue-200">Server Info</h2>
            <div className="space-y-2">
              <p className="text-lg">
                <span className="font-semibold text-green-300">Current Time:</span>
                <span className="ml-2 text-white">{serverTime}</span>
              </p>
              <div className="h-0.5 bg-white/20 my-4"></div>
              <h3 className="text-xl font-semibold text-blue-200">Users</h3>
              <ul className="space-y-1">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-white/10 rounded px-3 py-1 hover:bg-white/20 transition-all"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-bold text-blue-200">Client Capabilities</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white">React Client-Side Rendering</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <span className="text-white">Seamless API Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-white/70">
        Built with 🔥 Bun, React, and TypeScript
      </div>
    </div>
  );
};

export default BunFullstackDemo;
