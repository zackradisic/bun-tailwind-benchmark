import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Bun Fullstack App
            </h1>
            <p className="mt-2 text-gray-400">Lightning fast fullstack development</p>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"/>
            <span className="text-sm">Server Running</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Client Side
            </h2>
            <div className="space-y-2">
              <div className="bg-gray-700 rounded p-3">
                <code className="text-sm text-pink-400">React + TypeScript</code>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <code className="text-sm text-pink-400">Tailwind CSS</code>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <code className="text-sm text-pink-400">Hot Reloading</code>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Server Side
            </h2>
            <div className="space-y-2">
              {loading ? (
                <div className="animate-pulse">
                  <div className="h-8 bg-gray-700 rounded"/>
                  <div className="h-8 bg-gray-700 rounded mt-2"/>
                </div>
              ) : (
                users.map(user => (
                  <div key={user.id} className="bg-gray-700 rounded p-3 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-2"/>
                    <span>{user.name}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 transition-colors rounded-full px-6 py-3 text-white font-medium">
            <span>Built with Bun</span>
            <span className="text-xl">🥟</span>
          </div>
        </div>
      </div>
    </div>
  );
}
