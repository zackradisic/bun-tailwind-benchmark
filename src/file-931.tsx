import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.text();
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl w-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          ⚡ Bun Fullstack Magic 
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            <p className="text-gray-700">
              React component built with TypeScript, showcasing client-side rendering and interactivity.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Side</h2>
            {loading ? (
              <div className="animate-pulse text-gray-500">Fetching server data...</div>
            ) : (
              <div className="text-gray-700">
                Server Response: 
                <span className="font-bold ml-2 text-green-600">{serverData || 'No data'}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity">
            Bun: Fullstack Made Simple 🚀
          </div>
        </div>
      </div>
    </div>
  );
}
