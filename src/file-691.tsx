import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-purple-500 animate-pulse"></div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Bun Fullstack Demo
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-green-400 animate-ping"></div>
            <span className="text-green-400">Server Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Server-Side</h2>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json([
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" }
      ]);
    }
  }
});`}
              </code>
            </pre>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all border border-pink-500/20">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Client-Side</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 w-12 rounded-full bg-pink-500/20"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-pink-500/20 rounded"></div>
                    <div className="h-4 bg-pink-500/20 rounded w-3/4"></div>
                  </div>
                </div>
              ) : error ? (
                <div className="text-red-400">{error}</div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
                      <span className="h-2 w-2 rounded-full bg-pink-400"></span>
                      <span>{user.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p className="text-sm">Built with Bun, React, and Tailwind CSS</p>
          <div className="mt-2 flex justify-center space-x-2">
            {["TypeScript", "ESM", "Fast", "Simple"].map((tag, i) => (
              <span key={i} className="px-2 py-1 rounded-full text-xs bg-gray-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
