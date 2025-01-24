import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/features')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Bun Fullstack
            </h1>
            <p className="mt-2 text-gray-400">Lightning fast React + TypeScript development</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"/>
            <span className="text-green-400 font-mono">Server Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-purple-400">Server Features</h2>
            <div className="space-y-3">
              {loading ? (
                <div className="animate-pulse space-y-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-6 bg-gray-700 rounded"/>
                  ))}
                </div>
              ) : (
                data.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-pink-400">Client Features</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-pink-400"/>
                <span>Hot Module Reloading</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-pink-400"/>
                <span>TypeScript Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-pink-400"/> 
                <span>React 18 Ready</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-800/30 rounded-lg p-6">
          <div className="font-mono text-sm text-gray-400">
            <div className="text-purple-400">$ bun create react-app my-app</div>
            <div className="text-green-400">✓ Project created successfully!</div>
            <div className="text-purple-400">$ cd my-app && bun dev</div>
            <div className="text-green-400">Server running at http://localhost:3000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
