import "./style.css";
import { useEffect, useState } from "react";

export default function BunDemo() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun Fullstack Apps
          </h1>
          <p className="text-xl text-gray-300 font-light">Lightning fast React + TypeScript development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Server Side</h2>
            <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
              <code className="text-gray-300">
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
              </code>
            </pre>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Client Side</h2>
            {loading ? (
              <div className="animate-pulse flex justify-center items-center h-40">
                <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : error ? (
              <div className="text-red-400 text-center">{error}</div>
            ) : (
              <ul className="space-y-2">
                {users.map(user => (
                  <li key={user.id} className="bg-gray-900/50 p-3 rounded-lg flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center text-sm">
                      {user.name[0]}
                    </span>
                    <span>{user.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-pink-600 px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Built with Bun
          </div>
        </div>
      </div>
    </div>
  );
}
