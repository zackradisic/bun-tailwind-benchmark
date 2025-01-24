import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    async function fetchData() {
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
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Server Details</h2>
            <p className="text-gray-700">Current Server Time:</p>
            <div className="text-2xl font-mono text-blue-600 mt-2">{serverTime}</div>
          </div>

          <div className="bg-purple-50 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold text-purple-700 mb-4">User Data</h2>
            <ul className="space-y-2">
              {users.map(user => (
                <li 
                  key={user.id} 
                  className="bg-white p-2 rounded-lg text-gray-700 shadow-sm hover:bg-purple-100 transition-colors"
                >
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 transition-opacity">
            Built with Bun 🚀
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 text-center max-w-xl">
        <p className="italic">
          This demo showcases Bun's seamless fullstack development with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </div>
  );
}
