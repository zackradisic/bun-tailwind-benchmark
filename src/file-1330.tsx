import "./style.css";
import { useEffect, useState } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
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
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
            <p className="mt-2 text-gray-400">Lightning fast React + TypeScript development</p>
          </div>
          <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"/>
            <span className="text-sm">Server Active</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Server-side Features
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="bg-pink-500/10 text-pink-500 text-xs px-2 py-1 rounded">API</span>
                Built-in HTTP Server
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-pink-500/10 text-pink-500 text-xs px-2 py-1 rounded">SQL</span>
                Native SQLite Support  
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-pink-500/10 text-pink-500 text-xs px-2 py-1 rounded">HMR</span>
                Hot Module Reloading
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Client-side Features
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="bg-violet-500/10 text-violet-500 text-xs px-2 py-1 rounded">JSX</span>
                Native TypeScript & JSX
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-violet-500/10 text-violet-500 text-xs px-2 py-1 rounded">CSS</span>
                Built-in TailwindCSS
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-violet-500/10 text-violet-500 text-xs px-2 py-1 rounded">Fast</span>
                Lightning Quick Builds
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Live Data from Server</h3>
          {loading ? (
            <div className="animate-pulse flex space-x-4">
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            </div>
          ) : (
            <ul className="space-y-2">
              {users.map(user => (
                <li key={user.id} className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
                    {user.name[0]}
                  </span>
                  <span>{user.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
