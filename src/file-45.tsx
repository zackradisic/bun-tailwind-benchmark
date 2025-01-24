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
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
            <p className="mt-2 text-gray-400">Lightning fast development with Bun + React + TypeScript</p>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
            <span className="text-sm">Server Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-blue-500 p-2 rounded-lg mr-3">🚀</span>
              Server Side
            </h2>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-sm text-gray-300 font-mono">
                {`Bun.serve({
  static: {
    "/": homepage
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

          <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-purple-500 p-2 rounded-lg mr-3">⚛️</span>
              Client Side
            </h2>
            <div className="flex flex-col gap-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 bg-gray-700 rounded-lg w-full"/>
                </div>
              ) : (
                users.map(user => (
                  <div key={user.id} className="bg-gray-700 rounded-lg p-4 flex items-center justify-between">
                    <span>{user.name}</span>
                    <span className="text-gray-400">#{user.id}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-gray-800 rounded-xl p-8">
          <div className="text-4xl font-bold mb-4">⚡️ Zero Config Setup</div>
          <p className="text-gray-400">
            Just import your HTML files and Bun handles the rest - bundling, routing, and serving
          </p>
        </div>
      </div>
    </div>
  );
}
