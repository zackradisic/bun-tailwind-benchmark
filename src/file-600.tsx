import "./style.css";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
            Bun Fullstack Demo
          </h1>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"/>
            <span className="text-green-400 font-mono">Server Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">Server Side</h2>
            <pre className="bg-gray-900 p-4 rounded font-mono text-sm overflow-x-auto">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if (req.url.endsWith("/api/users")) {
      return Response.json(await Bun.sql\`
        SELECT * FROM users
      \`);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-teal-400">Client Side</h2>
            <div className="space-y-4">
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
                <div className="space-y-2">
                  {users.map(user => (
                    <div 
                      key={user.id}
                      className="flex items-center space-x-3 bg-gray-700/30 p-3 rounded-md hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center">
                        {user.name[0]}
                      </div>
                      <span>{user.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p className="text-sm">
            Powered by Bun's integrated bundler & server
          </p>
        </div>
      </div>
    </div>
  );
}
