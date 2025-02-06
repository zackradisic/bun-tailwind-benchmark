import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; users: any[] }>({
    message: '',
    users: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        const userData = await fetch('/api/users');
        const message = await response.text();
        const users = await userData.json();
        setServerData({ message, users });
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-4xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-6 border-4 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client-Side React</h2>
            <div className="space-y-4">
              <p className="text-gray-700">🚀 Built with TypeScript</p>
              <p className="text-gray-700">🎨 Styled with Tailwind</p>
              <p className="text-gray-700">⚡ Ultra-Fast Rendering</p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-6 border-4 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server-Side Bun</h2>
            <div className="space-y-4">
              <p className="text-gray-700">📡 Server Message: {serverData.message}</p>
              <p className="text-gray-700">👥 Users: {serverData.users.length}</p>
              <div className="bg-purple-100 rounded-lg p-2">
                {serverData.users.slice(0, 3).map((user, index) => (
                  <div key={index} className="text-sm text-purple-800">
                    {user.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <span className="animate-pulse mr-2">🌟</span>
            Built with Bun: Full-Stack Simplicity
          </div>
        </div>
      </div>
    </div>
  );
}
