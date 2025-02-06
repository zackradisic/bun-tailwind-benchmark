import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [data, setData] = useState<{users: string[]}>({ users: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/bun.svg" className="w-12 h-12 animate-bounce" alt="Bun logo"/>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Bun Fullstack
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"/>
            <span className="text-green-400 font-mono">Server Active</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold text-purple-400 mb-4">Server-side</h2>
            <pre className="font-mono text-sm text-gray-300 bg-black/30 p-4 rounded">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/users")) {
      return Response.json({
        users: ["Alice", "Bob"]
      });
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold text-pink-400 mb-4">Client-side</h2>
            {loading ? (
              <div className="flex items-center justify-center h-[180px]">
                <div className="animate-spin h-8 w-8 border-4 border-pink-500 rounded-full border-t-transparent"/>
              </div>  
            ) : (
              <div className="space-y-3">
                {data.users.map((user, i) => (
                  <div 
                    key={i}
                    className="bg-gray-900/50 p-3 rounded flex items-center gap-3"
                  >
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      {user[0]}
                    </div>
                    <span>{user}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p className="text-sm">Built with Bun + React + Tailwind</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="animate-ping h-2 w-2 rounded-full bg-purple-400"/>
            <div className="animate-ping delay-75 h-2 w-2 rounded-full bg-pink-400"/>
            <div className="animate-ping delay-150 h-2 w-2 rounded-full bg-purple-400"/>
          </div>
        </div>
      </div>
    </div>
  );
}
