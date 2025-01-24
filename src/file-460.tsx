import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [apiData, setApiData] = useState<{ message: string }>({ message: 'Loading...' });

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setApiData(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-2xl w-full transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client-Side React</h2>
            <p className="text-gray-700">
              Seamlessly renders dynamic React components with Typescript and Tailwind
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server-Side API</h2>
            <div className="animate-pulse">
              <p className="text-gray-700">
                API Response: {apiData.message}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center justify-center space-x-4">
            <div className="h-2 w-2 bg-blue-500 rounded-full animate-ping"></div>
            <span className="text-sm text-gray-600">
              Powered by Bun's lightning-fast runtime
            </span>
            <div className="h-2 w-2 bg-purple-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/50 backdrop-blur-lg rounded-xl p-4 max-w-xl w-full shadow-lg">
        <pre className="text-xs text-gray-700 overflow-x-auto">
          {JSON.stringify({ 
            runtime: 'Bun', 
            features: ['TypeScript', 'React', 'Tailwind', 'Fullstack']
          }, null, 2)}
        </pre>
      </div>
    </div>
  );
}
