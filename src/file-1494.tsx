import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/items")
      .then(res => res.json())
      .then(items => {
        setData(items);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
            Bun Fullstack Demo
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Client Side</h2>
              <p className="text-gray-300 mb-4">
                React + TypeScript + Tailwind running in Bun's bundler
              </p>
              <div className="bg-black rounded p-4">
                <pre className="text-pink-400 text-sm overflow-x-auto">
                  {`import React from 'react';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(<App />, root);`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Server Side</h2>
              <p className="text-gray-300 mb-4">
                Bun.serve() handles both static assets and API routes
              </p>
              <div className="bg-black rounded p-4">
                <pre className="text-pink-400 text-sm overflow-x-auto">
                  {`Bun.serve({\n  fetch(req) {\n    return new Response("Hello!");\n  }\n});`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">Live Data From Server</h2>
            {loading ? (
              <div className="animate-pulse flex justify-center">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {data.map((item, i) => (
                  <li 
                    key={i}
                    className="bg-gray-700 rounded px-4 py-2 text-gray-200 transform hover:scale-102 transition-transform"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
