import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Initializing...',
    timestamp: ''
  });

  const [clientInteraction, setClientInteraction] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ 
          message: 'Error fetching data', 
          timestamp: new Date().toISOString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-2xl w-full transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:bg-blue-100 transition-colors">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Response</h2>
            <p className="text-lg text-blue-600 font-medium">
              {serverData.message}
            </p>
            <p className="text-sm text-blue-400 mt-2">
              {serverData.timestamp}
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 shadow-md hover:bg-purple-100 transition-colors">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Interaction</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientInteraction(prev => prev + 1)}
                className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                Increment
              </button>
              <span className="text-3xl font-bold text-purple-600">
                {clientInteraction}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with Bun, React, TypeScript & Tailwind
          </p>
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 max-w-3xl w-full">
        <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
          Seamless Fullstack Development
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {['Server-Side', 'Client-Side', 'Type Safety'].map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white/50 rounded-xl p-4 text-center border border-gray-200 hover:border-blue-300 transition-all"
            >
              <span className="text-lg font-bold text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
