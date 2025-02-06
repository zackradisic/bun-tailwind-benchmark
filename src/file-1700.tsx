import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch users')
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
          Bun Full-Stack Showcase 🚀
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">Server-Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-bold text-green-800">Client-Side</h2>
            <div className="bg-green-100 p-4 rounded-lg">
              {loading ? (
                <div className="flex items-center justify-center space-x-2 animate-pulse">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Users</h3>
                  <ul className="space-y-2">
                    {users.map((user, index) => (
                      <li 
                        key={index} 
                        className="bg-white p-2 rounded-md shadow-sm hover:bg-green-200 transition-colors"
                      >
                        {user.name || 'Anonymous User'}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 italic">
            Powered by Bun 🌱 - Fullstack made simple
          </p>
        </div>
      </div>
    </div>
  )
}
