import "./style.css";
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
        <div className="bg-black/30 rounded-xl p-8 backdrop-blur-lg border border-gray-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-2xl font-bold">🚀</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bun Fullstack App
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-300">Server Side</h2>
              <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
                <pre className="text-green-400">
                  {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-pink-300">Client Side</h2>
              <div className="bg-gray-800/50 rounded-lg p-4">
                {loading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  </div>
                ) : error ? (
                  <div className="text-red-400">{error}</div>
                ) : (
                  <ul className="space-y-2">
                    {users.map(user => (
                      <li key={user.id} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <span className="h-2 w-2 rounded-full bg-green-400"></span>
                        {user.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Built with Bun {process.versions.bun} 🥟
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
