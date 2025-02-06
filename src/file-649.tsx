import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverStartTime] = useState(Date.now());

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
          <div className="flex items-center space-x-4">
            <img src="/bun.svg" className="w-16 h-16 animate-bounce" alt="Bun logo" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm">Server uptime</p>
            <p className="text-2xl font-mono">
              {((Date.now() - serverStartTime) / 1000).toFixed(1)}s
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-green-500 w-3 h-3 rounded-full mr-2 animate-pulse"/>
              Server
            </h2>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-green-400">Bun.serve(&#123;</p>
              <p className="ml-4 text-purple-400">static: &#123;</p>
              <p className="ml-8 text-blue-400">"/": homepage,</p>
              <p className="ml-4 text-purple-400">&#125;,</p>
              <p className="ml-4 text-yellow-400">fetch(req) &#123; ... &#125;</p>
              <p className="text-green-400">&#125;)</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-blue-500 w-3 h-3 rounded-full mr-2 animate-pulse"/>
              Client
            </h2>
            {loading ? (
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
              <ul className="space-y-2">
                {users.map(user => (
                  <li 
                    key={user.id}
                    className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <p>Built with Bun, React & Tailwind</p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"/>
              <p>Server running at localhost:3000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
