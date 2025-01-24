import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/bun-demo');
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            ⚡ Bun Fullstack Magic ⚡
          </h1>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl shadow-inner">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              🚀
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Client-Side React</h2>
              <p className="text-gray-600">Built with TypeScript & Tailwind</p>
            </div>
          </div>

          <div className="border-2 border-dashed border-purple-200 p-4 rounded-xl">
            {loading ? (
              <div className="flex justify-center items-center space-x-3 animate-bounce">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">
                  Server Response
                </h3>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
                  {JSON.stringify(serverData, null, 2)}
                </pre>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl text-center hover:bg-green-100 transition-colors">
              <h4 className="font-semibold text-green-800">Fast</h4>
              <p className="text-green-600">Bun's ultra-quick runtime</p>
            </div>
            <div className="bg-red-50 p-4 rounded-xl text-center hover:bg-red-100 transition-colors">
              <h4 className="font-semibold text-red-800">Simple</h4>
              <p className="text-red-600">Fullstack in one file</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-sm text-gray-500 text-center opacity-70">
        Built with ❤️ using Bun, React & TypeScript
      </footer>
    </div>
  );
};

export default BunFullstackShowcase;
