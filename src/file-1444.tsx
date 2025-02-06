import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; users: any[] }>({
    message: '',
    users: []
  });

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/demo');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-10 max-w-4xl w-full transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6">
          ⚡ Bun Full-Stack Showcase
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/30 rounded-xl p-6 shadow-lg transform transition-all hover:rotate-2 hover:scale-105">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Client-Side</h2>
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-800">
                React Component with Tailwind Styling
              </p>
              <div className="bg-blue-100 p-4 rounded-lg">
                <code className="text-sm text-blue-700">
                  {`<BunFullstackShowcase />`}
                </code>
              </div>
            </div>
          </div>

          <div className="bg-white/30 rounded-xl p-6 shadow-lg transform transition-all hover:-rotate-2 hover:scale-105">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Server-Side</h2>
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-800">
                Bun Server Response
              </p>
              <pre className="bg-green-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-green-700">
                  {JSON.stringify(serverData, null, 2)}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all transform hover:scale-110 shadow-lg"
          >
            Reload Data
          </button>
        </div>
      </div>

      <footer className="text-white/70 text-sm text-center">
        Built with 💖 using Bun, React & TypeScript
      </footer>
    </div>
  );
}
