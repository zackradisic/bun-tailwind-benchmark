import "./style.css";
import { useEffect, useState } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/speed")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-8">
          <img src="/bun-logo.svg" className="w-32 h-32 animate-bounce" />
          
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Bun Fullstack
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-pink-500">Server Side</h2>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <code>Bun.serve()</code>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <code>HTML Route Bundling</code>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <code>API Endpoints</code>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-violet-500">Client Side</h2>
              <div className="space-y-2">
                {loading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {data.map((item, i) => (
                      <div 
                        key={i}
                        className="flex items-center space-x-2 bg-gray-700/50 p-2 rounded"
                      >
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Fast', 'Simple', 'Modern', 'Typescript'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500/20 to-violet-500/20 border border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
