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
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Bun Fullstack Demo
          </h1>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"/>
            <span className="text-green-400 font-mono">Server Running</span>
          </div>
        </div>

        <div className="mt-12 bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Users from Database</h2>
            <div className="px-4 py-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
              <code className="font-mono text-purple-300">Bun.sqlite</code>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin h-8 w-8 border-4 border-purple-500 rounded-full border-t-transparent"/>
            </div>
          ) : (
            <div className="space-y-4">
              {users.map(user => (
                <div 
                  key={user.id}
                  className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    {user.name[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-400">ID: {user.id}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
          <div className="flex items-center space-x-3 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-yellow-400"/>
              <span>TypeScript</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-blue-400"/>
              <span>React</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-purple-400"/>
              <span>Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
