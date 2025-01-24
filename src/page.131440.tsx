import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string; users: any[] }>({
    message: '',
    users: [],
  });

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const userResponse = await fetch('/api/users');
        const data = await response.json();
        const users = await userResponse.json();
        setServerData({ message: data.message, users });
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-4xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md transform hover:rotate-3 transition-transform">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Client Side</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                React with TypeScript
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Tailwind CSS Styling
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                Dynamic Rendering
              </li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-2xl shadow-md transform hover:-rotate-3 transition-transform">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Server Side</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Server Message: 
                <span className="font-bold ml-2 text-purple-600">
                  {serverData.message || 'Loading...'}
                </span>
              </p>
              <div>
                <h3 className="font-semibold text-purple-700">Users:</h3>
                <ul className="max-h-32 overflow-auto bg-white p-2 rounded-lg">
                  {serverData.users.map((user, index) => (
                    <li key={index} className="text-sm text-gray-700 border-b last:border-b-0 py-1">
                      {user.name || 'Anonymous User'}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-110 transition-all">
            Bun: Fast, Simple, Full-Stack! 🚀
          </div>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
