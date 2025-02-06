import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch users', error)
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl duration-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-blue-200">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Server Side</h2>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith('/api/users')) {
      const users = await Bun.sql\`SELECT * FROM users\`
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-green-200">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Client Side</h2>
            {loading ? (
              <div className="flex items-center justify-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
            ) : (
              <div className="space-y-2">
                {users.map((user, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-3 rounded-lg shadow-md hover:bg-green-50 transition-colors"
                  >
                    <p className="font-semibold text-gray-700">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-blue-600 transition-all transform hover:scale-110">
            Bun: ⚡ Fast & Simple Fullstack
          </div>
        </div>
      </div>
    </div>
  )
}
