import "./style.css";
import { useState, useEffect } from 'react';

export default function BunShowcase() {
  const [data, setData] = useState<{users: string[]}>({users: []});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => {
        setData({users});
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Bun Fullstack Magic
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-300">Server Features</h2>
              <div className="space-y-2">
                {['Built-in Bundling', 'HTTP Server', 'File Imports', 'TypeScript Native'].map(feature => (
                  <div key={feature} className="flex items-center space-x-2 text-gray-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-purple-300 mb-4">API Response</h2>
              {isLoading ? (
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
                <pre className="text-sm text-gray-300 overflow-auto">
                  {JSON.stringify(data, null, 2)}
                </pre>
              )}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="text-sm text-gray-400">
              <code className="font-mono bg-black/30 px-2 py-1 rounded">
                bun run dev
              </code>
              <span className="ml-2">is all you need to start building!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
