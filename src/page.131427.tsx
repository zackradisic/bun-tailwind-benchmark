import React, { useState } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [serverData, setServerData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchServerData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/hello');
      const data = await response.text();
      setServerData(data);
    } catch (error) {
      setServerData('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <p className="text-white/80 mb-4">
              React Component powered by TypeScript
            </p>
            <button 
              onClick={fetchServerData}
              disabled={loading}
              className={`
                w-full py-3 rounded-lg transition-all duration-300
                ${loading 
                  ? 'bg-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 active:scale-95'}
                text-white font-semibold shadow-md
              `}
            >
              {loading ? 'Fetching...' : 'Get Server Data'}
            </button>
          </div>

          <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 shadow-inner min-h-[200px] flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
            {serverData ? (
              <p className="text-green-400 font-mono animate-pulse">{serverData}</p>
            ) : (
              <p className="text-white/50">No data fetched yet</p>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-white/70 text-sm max-w-xl">
        <p className="tracking-wide">
          Built with 🚀 Bun: Blazing fast JavaScript runtime & bundler
        </p>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
