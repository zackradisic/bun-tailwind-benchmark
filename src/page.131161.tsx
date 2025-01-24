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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            <p className="text-gray-600 mb-4">
              React component built with TypeScript, styled with Tailwind
            </p>
            <button 
              onClick={fetchServerData}
              disabled={loading}
              className={`w-full py-3 rounded-lg transition-all ${
                loading 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg'
              }`}
            >
              {loading ? 'Fetching...' : 'Fetch Server Data'}
            </button>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Response</h2>
            <div className={`h-24 flex items-center justify-center rounded-lg ${
              serverData 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-500'
            }`}>
              {serverData || 'No data fetched yet'}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-600 max-w-xl">
        <p className="italic">
          Built with 🚀 Bun, React, TypeScript & Tailwind - 
          Showing how simple fullstack development can be!
        </p>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
