import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
            Bun Fullstack App
          </h1>
          
          <p className="mt-4 text-xl text-gray-300">
            The fastest way to build React apps
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative p-6 bg-black rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Server-side</h2>
                <div className="space-y-2 text-gray-300 text-left">
                  <p className="font-mono bg-gray-800 p-2 rounded">Bun.serve()</p>
                  <p className="font-mono bg-gray-800 p-2 rounded">HTML route bundling</p>
                  <p className="font-mono bg-gray-800 p-2 rounded">TypeScript/TSX support</p>
                  <p className="font-mono bg-gray-800 p-2 rounded">API endpoints</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative p-6 bg-black rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Client-side</h2>
                <div className="space-y-2 text-gray-300 text-left">
                  {isLoading ? (
                    <div className="animate-pulse space-y-2">
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-700 rounded w-4/6"></div>
                    </div>
                  ) : (
                    <div>
                      {users.map(user => (
                        <p key={user.id} className="font-mono bg-gray-800 p-2 rounded">
                          {user.name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform transition hover:-translate-y-0.5">
              Get Started with Bun
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
