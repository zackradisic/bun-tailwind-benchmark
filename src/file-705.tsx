import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
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
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Bun Fullstack App
              </h1>
              <p className="mt-2 text-gray-400">Built with Bun, React & TypeScript</p>
            </div>
            
            <div className="flex items-center space-x-3 bg-gray-800 rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
              <span className="text-sm font-medium">Server Running</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur border border-gray-700">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                Server Side
              </h2>
              <div className="bg-gray-900 rounded p-4">
                <pre className="text-sm text-gray-300 font-mono">
                  {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/users")){
      return Response.json(users);
    }
  }
})`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur border border-gray-700">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Client Side
              </h2>
              {loading ? (
                <div className="flex items-center justify-center h-[104px]">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"/>
                </div>
              ) : (
                <div className="space-y-2">
                  {users.map(user => (
                    <div key={user.id} className="flex items-center space-x-3 bg-gray-900 rounded p-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center font-bold">
                        {user.name[0]}
                      </div>
                      <span>{user.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2 text-sm">
              <span>Built with</span>
              <span className="font-mono bg-gray-900 px-2 py-1 rounded text-pink-500">bun create</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
