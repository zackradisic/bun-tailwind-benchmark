import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string; users: any[] }>({
    message: 'Loading...',
    users: [],
  });

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ 
          message: 'Error fetching data', 
          users: [] 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl w-full transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md transform transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>React with TypeScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Tailwind CSS Styling</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Dynamic Rendering</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow-md transform transition-all hover:shadow-xl">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Side</h2>
            <div className="space-y-3">
              <p className="text-lg font-semibold">Server Message:</p>
              <div className="bg-purple-100 p-3 rounded-lg">
                <code className="text-purple-800">{serverData.message}</code>
              </div>
              {serverData.users.length > 0 && (
                <div>
                  <p className="text-lg font-semibold mt-4">Users:</p>
                  <ul className="list-disc list-inside text-purple-700">
                    {serverData.users.map((user, index) => (
                      <li key={index}>{user.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with Bun, React, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}
