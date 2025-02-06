import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([])
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
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-8">
          ⚡ Bun Fullstack Magic ⚡
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <pre className="bg-blue-100 p-4 rounded-md text-sm text-blue-900">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Client Side</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-green-200 rounded"></div>
                  <div className="h-4 bg-green-200 rounded w-5/6"></div>
                </div>
              </div>
            ) : (
              <ul className="space-y-2 text-green-900">
                {users.map((user, idx) => (
                  <li key={idx} className="bg-green-100 p-2 rounded hover:bg-green-200 transition-colors">
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-indigo-600 transition-all">
            Built with 🧊 Bun
          </div>
        </div>
      </div>
    </div>
  )
}
