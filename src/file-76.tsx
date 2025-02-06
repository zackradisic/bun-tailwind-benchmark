import "./style.css";
import { useEffect, useState } from "react";

export default function BunFullstackDemo() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun Fullstack
          </h1>
          <p className="mt-4 text-gray-400 text-xl">Lightning fast React + TypeScript development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Server Side</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-green-400 font-mono text-sm">GET /api/users</p>
                {isLoading ? (
                  <div className="animate-pulse h-8 bg-gray-700 rounded mt-2"></div>
                ) : (
                  <pre className="text-sm overflow-x-auto">
                    {JSON.stringify(users, null, 2)}
                  </pre>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-xl transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Client Side</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-sm mb-2">React State Counter:</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setCount(c => c - 1)}
                    className="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold">{count}</span>
                  <button
                    onClick={() => setCount(c => c + 1)} 
                    className="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-purple-600 rounded-full text-lg font-medium hover:bg-purple-700 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Powered by Bun
          </div>
        </div>
      </div>
    </div>
  );
}
