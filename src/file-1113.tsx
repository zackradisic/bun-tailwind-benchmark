import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/bun-power');
        const data = await response.json();
        setServerData(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch server data', error);
        setLoading(false);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <ul className="space-y-2 text-gray-200">
              <li>✅ React & TypeScript</li>
              <li>✅ Tailwind CSS</li>
              <li>✅ Dynamic Rendering</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            {loading ? (
              <div className="animate-pulse text-gray-300">Loading server data...</div>
            ) : (
              <div className="text-white">
                <p className="font-semibold">Message: {serverData?.message}</p>
                <p className="text-sm text-gray-300">Timestamp: {serverData?.timestamp}</p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-2xl">
            Powered by Bun 🚀
          </button>
        </div>
      </div>

      <div className="text-white/70 text-sm text-center max-w-xl">
        This demo showcases how Bun makes fullstack development incredibly simple and fast, 
        with seamless TypeScript, React, and server-side integration.
      </div>
    </div>
  );
};

export default BunFullstackDemo;
