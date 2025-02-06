import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-6 w-full max-w-3xl transform transition-all hover:scale-[1.02] hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
          Bun Full-Stack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-4 space-y-4">
            <h2 className="text-2xl font-bold text-blue-700">Server Side</h2>
            <pre className="bg-blue-100 p-3 rounded-lg text-sm">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-green-50 rounded-xl p-4 space-y-4">
            <h2 className="text-2xl font-bold text-green-700">Client Side</h2>
            <div className="bg-green-100 p-3 rounded-lg">
              {loading ? (
                <div className="animate-pulse text-green-600">
                  Loading users...
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li 
                      key={user.id} 
                      className="bg-white p-2 rounded-md shadow-sm hover:bg-green-200 transition-colors"
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <span className="text-sm text-gray-500 italic">
            Built with 🚀 Bun, React, and Tailwind
          </span>
        </div>
      </div>
    </div>
  )
}
