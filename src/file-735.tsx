import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-500">
              Bun Fullstack
            </h1>
            <p className="mt-2 text-gray-400">Building React apps at the speed of light ⚡️</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="px-4 py-2 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
              Server + Client
            </div>
            <div className="px-4 py-2 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20">
              TypeScript
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-3 h-3 rounded-full bg-violet-500 mr-2"></span>
              Server
            </h2>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-sm text-gray-300 font-mono">
                {`Bun.serve({
  static: {
    "/": app,
  },
  fetch: async (req) => {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
              </pre>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-3 h-3 rounded-full bg-pink-500 mr-2"></span>
              Client
            </h2>
            <div className="bg-gray-900 rounded-lg p-4 h-[200px] overflow-auto">
              {loading ? (
                <div className="animate-pulse flex space-x-2 items-center justify-center h-full">
                  <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="flex items-center space-x-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span>{user.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
          <div className="flex items-center text-sm text-violet-300">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Fast refresh enabled - Changes will reflect immediately
          </div>
        </div>
      </div>
    </div>
  );
}
