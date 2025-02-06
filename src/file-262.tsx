import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const BunFullstackDemo: React.FC = () => {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [users, setUsers] = useState<any[]>([]);

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
        console.error('Failed to fetch data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="p-8 space-y-6">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">
            Bun Fullstack Magic ✨
          </h1>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-blue-700 mb-3">Server Details</h2>
              <p className="text-gray-700">
                Current Server Time: 
                <span className="font-mono ml-2 text-green-600">{serverTime}</span>
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-purple-700 mb-3">Users</h2>
              <ul className="space-y-2">
                {users.map((user, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center">
                    <span className="mr-2 text-purple-500">👤</span>
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-6">
            <a 
              href="https://bun.sh" 
              target="_blank" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Learn More About Bun
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500 text-center opacity-70">
        Built with 💖 using Bun, React & TypeScript
      </div>
    </div>
  );
};

export default BunFullstackDemo;
