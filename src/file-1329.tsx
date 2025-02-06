import "./style.css";
import { useState, useEffect } from "react";

export default function BunSpeedDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Bun Fullstack Demo
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-purple-400">Server-side Features</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Built-in SQLite Support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fast HTTP Server
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  TypeScript Support
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-pink-400">Client-side Integration</h2>
              <div className="space-y-4">
                {isLoading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {users.map(user => (
                      <div key={user.id} className="bg-gray-800 rounded p-3 flex items-center justify-between">
                        <span>{user.name}</span>
                        <span className="text-sm text-gray-400">ID: {user.id}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-sm animate-bounce">
              Built with Bun - Lightning Fast ⚡
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>Bun handles both your backend API and frontend bundling seamlessly</p>
        </div>
      </div>
    </div>
  );
}
