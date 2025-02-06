import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackshowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: 'Error fetching data' });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex items-center justify-center space-x-6 mb-8">
          <div className="bg-white/30 rounded-full px-6 py-3 shadow-md">
            <p className="text-xl font-semibold text-gray-800">
              Server Response: {serverData.message}
            </p>
          </div>
          
          <button 
            onClick={() => setCounter(counter + 1)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors shadow-lg transform active:scale-95"
          >
            Clicks: {counter}
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/20 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Server Magic 🚀</h2>
            <pre className="text-sm text-white/80 bg-black/20 p-4 rounded-lg">
              {`Bun.serve({
  fetch(req) {
    return Response.json({ 
      message: 'Blazing Fast!' 
    });
  }
})`}
            </pre>
          </div>
          
          <div className="bg-white/20 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Client Power 💻</h2>
            <pre className="text-sm text-white/80 bg-black/20 p-4 rounded-lg">
              {`const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  return <div>{data.message}</div>;
}`}
            </pre>
          </div>
        </div>
      </div>
      
      <footer className="text-white/70 text-sm text-center">
        Built with ♥ using Bun, React & Tailwind
      </footer>
    </div>
  );
}
