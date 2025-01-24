import { useEffect, useState } from "react";

export default function BunDemo() {
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
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack Demo
            </h1>
            <p className="text-gray-400 mt-2">Lightning fast fullstack React + TypeScript development</p>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-mono">Server Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Client-side React
            </h2>
            <div className="prose prose-invert">
              <pre className="bg-gray-900 p-4 rounded-lg text-sm">
                {`import { createRoot } from 'react-dom/client';
import { App } from './app';

createRoot(document.getElementById('root'))
  .render(<App />);`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Bun Server
            </h2>
            <div className="prose prose-invert">
              <pre className="bg-gray-900 p-4 rounded-lg text-sm">
                {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users);
    }
  }
});`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Live Data from Server</h2>
          {loading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {users.map(user => (
                <div key={user.id} className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-gray-400">ID: {user.id}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
