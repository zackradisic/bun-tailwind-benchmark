import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [serverTime, setServerTime] = useState("");

  useEffect(() => {
    fetch("/api/data")
      .then(res => res.json())  
      .then(data => {
        setData(data);
        setLoading(false);
      });

    const timer = setInterval(() => {
      fetch("/api/time")
        .then(res => res.text())
        .then(time => setServerTime(time));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Bun Fullstack Demo
          </h1>
          <div className="animate-pulse bg-gray-800 rounded-lg px-4 py-2">
            Server Time: {serverTime}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-pink-400">Client Side</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-ping"/>
                <span>React 18 + TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-400 animate-ping"/>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-purple-400 animate-ping"/>
                <span>Hot Module Reloading</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-violet-400">Server Side</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              ) : (
                data.map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-400"/>
                    <span>{JSON.stringify(item)}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Built with Bun {process.version}
          </div>
        </div>
      </div>
    </div>
  );
}
