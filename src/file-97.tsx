import React, { useState, useEffect } from 'react';

export default function BunFullstackDemoApp() {
  const [serverData, setServerData] = useState<{ message: string; time: string }>({
    message: 'Loading...',
    time: ''
  });

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/demo');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ 
          message: 'Error fetching data', 
          time: new Date().toLocaleString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-2xl w-full transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            <p className="text-gray-700">React Component</p>
            <p className="text-sm text-gray-500 mt-2">Rendered with Typescript</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Side</h2>
            <p className="text-gray-700">{serverData.message}</p>
            <p className="text-sm text-gray-500 mt-2">{serverData.time}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg transform hover:scale-110 transition-all">
            Powered by Bun 🚀
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 text-center max-w-xl">
        A demonstration of Bun's incredible fullstack capabilities, seamlessly bridging client and server with React, TypeScript, and Tailwind CSS
      </div>
    </div>
  );
}
