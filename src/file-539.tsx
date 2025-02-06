import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [data, setData] = useState<{message: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/messages')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <img src="/bun-logo.svg" className="w-16 h-16 animate-bounce" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-mono">Server Active</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-black/30 rounded-xl p-6 backdrop-blur-lg border border-white/10 hover:border-pink-500/50 transition-all">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Client Side
            </h2>
            <div className="space-y-4">
              <div className="bg-black/20 rounded p-4 font-mono text-sm">
                <p className="text-pink-400">import</p>
                <p className="pl-4">createRoot from 'react-dom/client'</p>
                <p className="text-pink-400">import</p> 
                <p className="pl-4">App from './App'</p>
              </div>
              <p className="text-sm text-gray-400">
                React automatically bundles & hydrates in development
              </p>
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 backdrop-blur-lg border border-white/10 hover:border-violet-500/50 transition-all">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Server Side
            </h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-400/20 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-400/20 rounded"></div>
                      <div className="h-4 bg-gray-400/20 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  {data.map((msg, i) => (
                    <div key={i} className="bg-black/20 rounded p-3 font-mono text-sm">
                      {msg.message}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Built with Bun, React, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}
