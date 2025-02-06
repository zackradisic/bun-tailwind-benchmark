import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
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
        console.error('Failed to fetch data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Time</h2>
            <p className="text-3xl font-mono text-blue-600 animate-pulse">{serverTime}</p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Users</h2>
            <ul className="space-y-2">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="bg-white px-4 py-2 rounded-md text-purple-700 font-semibold shadow-sm hover:bg-purple-100 transition-colors"
                >
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-green-100 border-2 border-green-300 rounded-full px-6 py-3 text-green-800 font-bold animate-bounce">
            Built with Bun 🚀
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500 text-center max-w-xl">
        This demo showcases Bun's incredible ability to build fullstack applications with seamless server and client integration using React, TypeScript, and Tailwind CSS.
      </div>
    </div>
  );
}
