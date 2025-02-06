import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users')
        const userData = await response.json()
        setUsers(userData)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch users', error)
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6 tracking-tight drop-shadow-lg animate-pulse">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/20 rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Server-Side</h2>
            <pre className="text-sm text-white/80 bg-black/20 p-4 rounded-lg overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/20 rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Client-Side</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse text-white/70">Loading users...</div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-white/10 p-3 rounded-lg text-white hover:bg-white/20 transition"
                    >
                      {user.name} - {user.email}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 w-full max-w-4xl text-center">
        <p className="text-xl font-semibold text-white tracking-wide">
          Powered by Bun 🚀 React ⚛️ TypeScript 📘
        </p>
      </div>
    </div>
  )
}
