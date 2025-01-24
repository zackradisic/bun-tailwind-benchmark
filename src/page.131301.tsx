import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: number }>();
  const [loading, setLoading] = useState(false);

  const fetchServerData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setServerData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            <button 
              onClick={fetchServerData}
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
              }`}
            >
              {loading ? 'Fetching...' : 'Fetch Server Data'}
            </button>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Response</h2>
            {serverData ? (
              <div className="text-center space-y-2">
                <p className="text-lg font-medium text-purple-800">{serverData.message}</p>
                <p className="text-sm text-purple-600">
                  Timestamp: {new Date(serverData.timestamp).toLocaleString()}
                </p>
              </div>
            ) : (
              <p className="text-gray-500 text-center">No data fetched yet</p>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 opacity-70">
        Built with 💖 using Bun, React & Tailwind
      </div>
    </div>
  );
}

// Render for client-side
if (typeof window !== 'undefined') {
  const root = createRoot(document.getElementById('root')!);
  root.render(<BunFullstackDemo />);
}
