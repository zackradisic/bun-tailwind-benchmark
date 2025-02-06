import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [serverTime, setServerTime] = useState<number>(0);

  useEffect(() => {
    // Client-side data fetching
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });

    // WebSocket connection to server
    const ws = new WebSocket("ws://localhost:3000");
    ws.onmessage = (event) => {
      setServerTime(parseInt(event.data));
    };

    return () => ws.close();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun Fullstack Demo
          </h1>
          <div className="animate-pulse text-sm font-mono bg-gray-800 rounded-lg px-4 py-2">
            Server Time: {serverTime}ms
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 shadow-xl border border-gray-700">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-green-500/10 text-green-500 p-2 rounded-lg mr-2">🚀</span>
              Server Features
            </h2>
            <ul className="space-y-3">
              {["Built-in HTTP server", "WebSocket support", "SQLite integration", "File system API"].map(feature => (
                <li key={feature} className="flex items-center text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"/>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 shadow-xl border border-gray-700">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-blue-500/10 text-blue-500 p-2 rounded-lg mr-2">⚛️</span>
              Client Features
            </h2>
            <div className="relative">
              {isLoading ? (
                <div className="animate-pulse space-y-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-8 bg-gray-700/50 rounded"/>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3">
                  {users.map(user => (
                    <li key={user.id} className="flex items-center bg-gray-700/20 rounded-lg p-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold">
                        {user.name[0]}
                      </div>
                      <span className="ml-3 text-gray-300">{user.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p className="font-mono bg-gray-800/30 inline-block px-4 py-2 rounded-full">
            Built with Bun + React + TypeScript + Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}
