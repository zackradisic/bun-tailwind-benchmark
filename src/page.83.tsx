import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Bun Fullstack Magic ✨
          </h1>
          <p className="text-gray-400 text-xl">Lightning-fast React + TypeScript development</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-purple-500 transition-all">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-purple-500 p-2 rounded-lg mr-3">🚀</span>
              Server-side
            </h2>
            <pre className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json([
        { id: 1, name: "Bunny" }
      ]);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-pink-500 transition-all">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-pink-500 p-2 rounded-lg mr-3">⚡</span>
              Client-side
            </h2>
            <div className="bg-gray-900 p-4 rounded-lg">
              {isLoading ? (
                <div className="animate-pulse flex justify-center py-4">
                  <div className="h-6 w-24 bg-gray-700 rounded"></div>
                </div>
              ) : error ? (
                <div className="text-red-500 text-center py-4">{error}</div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="flex items-center space-x-2 p-2 bg-gray-800 rounded">
                      <span className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                        {user.id}
                      </span>
                      <span>{user.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Get started by running{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-pink-400">
              bun create react-app
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}
