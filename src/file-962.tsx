import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/bun-features');
        const data = await response.json();
        setServerData(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            ⚡ Bun Fullstack Magic ⚡
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Server Features</h2>
            {loading ? (
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm">
                {serverData.length} Features Loaded
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div 
                  key={index} 
                  className="bg-gray-200 h-24 rounded-lg animate-pulse"
                ></div>
              ))
            ) : (
              serverData.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <p className="font-semibold text-gray-800">{feature}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
        <span>✨ Built with</span>
        <div className="flex space-x-2">
          <span className="font-bold text-blue-600">Bun</span>
          <span className="font-bold text-teal-500">React</span>
          <span className="font-bold text-pink-500">TypeScript</span>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
