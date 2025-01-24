import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; users: any[] }>({
    message: '',
    users: []
  });

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl duration-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 border-4 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client-Side React</h2>
            <p className="text-gray-700">
              Built with TypeScript, React, and an absolute ton of Tailwind classes for maximum pizzazz!
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Interactive Button
            </button>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border-4 border-purple-200 hover:border-purple-400 transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server-Side Data</h2>
            <div className="space-y-2">
              <p className="text-gray-700">Server Message: {serverData.message}</p>
              <div>
                <h3 className="font-semibold text-purple-600">Users:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {serverData.users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Powered by Bun - The Fast All-in-One JavaScript Runtime 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
