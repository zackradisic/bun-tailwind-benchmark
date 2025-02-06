import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun: Full-Stack Simplicity
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-blue-500">●</span>
                React with TypeScript
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-500">●</span>
                Tailwind CSS Styling
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-500">●</span>
                Dynamic Client Rendering
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Side</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-purple-600">Server Time:</p>
                <p className="text-xl font-mono bg-purple-100 p-2 rounded">
                  {serverTime}
                </p>
              </div>
              <div>
                <p className="font-semibold text-purple-600">Users:</p>
                <ul className="bg-purple-100 p-2 rounded max-h-32 overflow-auto">
                  {users.map(user => (
                    <li key={user.id} className="text-purple-800">
                      {user.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Powered by Bun: Blazing Fast Full-Stack Development
          </p>
        </div>
      </div>
    </div>
  );
}
