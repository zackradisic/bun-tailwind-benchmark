import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const serverTimeData = await timeResponse.text();
        setServerTime(serverTimeData);

        const userResponse = await fetch('/api/users');
        const userData = await userResponse.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          ⚡ Bun Fullstack Demo
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl border-2 border-blue-100 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Server Info</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2">🕒</span>
                <span className="font-medium text-gray-700">Server Time:</span>
                <span className="ml-2 text-blue-500">{serverTime || 'Loading...'}</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">🖥️</span>
                <span className="font-medium text-gray-700">Runtime:</span>
                <span className="ml-2 text-green-500">Bun</span>
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border-2 border-blue-100 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white rounded-lg p-3 shadow-sm flex justify-between items-center hover:bg-blue-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-700">{user.name}</span>
                    <span className="text-sm text-blue-500">{user.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 opacity-70 hover:opacity-100 transition-opacity">
        Built with 🔥 Bun, React & TypeScript
      </div>
    </div>
  );
}
