import "./style.css";
import React, { useState } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchServerData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8 transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
          Bun: Full-Stack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-purple-100 p-4 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Side</h2>
            <button 
              onClick={fetchServerData}
              disabled={loading}
              className={`w-full py-3 rounded-lg transition-all ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white active:scale-95'
              }`}
            >
              {loading ? 'Loading...' : 'Fetch Server Data'}
            </button>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Response</h2>
            {data.length > 0 ? (
              <ul className="space-y-2">
                {data.map((item, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-2 rounded-md shadow-sm text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center italic">No data fetched yet</p>
            )}
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          Built with 🚀 <span className="font-bold text-blue-600">Bun</span>, 
          <span className="font-bold text-purple-600"> React</span> & 
          <span className="font-bold text-green-600"> TypeScript</span>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
