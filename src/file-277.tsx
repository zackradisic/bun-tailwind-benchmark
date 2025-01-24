import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<string[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Bun Fullstack Power
            </h1>
            <p className="text-gray-400 mt-2">Build blazing fast apps with Bun + React + TypeScript</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"/>
            <span className="text-green-400 font-mono">Server Active</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">Server-side</h2>
            <pre className="bg-gray-900 p-4 rounded font-mono text-sm text-gray-300 overflow-x-auto">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/users")) {
      return Response.json(["user1", "user2"]);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-pink-400">Client-side</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">API Status</span>
                {loading ? (
                  <div className="animate-spin h-5 w-5 border-2 border-pink-500 rounded-full border-t-transparent"/>
                ) : (
                  <span className="text-green-400">✓ Connected</span>
                )}
              </div>
              <div>
                <span className="text-gray-400">Users:</span>
                <ul className="mt-2 space-y-1">
                  {users.map((user, i) => (
                    <li key={i} className="bg-gray-700 px-3 py-1 rounded text-sm">{user}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500 text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Powered by Bun
          </span>
        </div>
      </div>
    </div>
  );
}
