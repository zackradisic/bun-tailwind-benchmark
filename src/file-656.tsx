import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([])
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server</h2>
            <pre className="text-sm text-blue-600 bg-blue-100 p-4 rounded-lg">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client</h2>
            {loading ? (
              <div className="flex items-center justify-center animate-pulse">
                <div className="w-10 h-10 bg-purple-300 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, idx) => (
                  <li 
                    key={idx} 
                    className="bg-purple-100 p-2 rounded text-purple-800 transform transition-all hover:translate-x-2"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 mt-4">
        Built with 
        <span className="mx-2 font-bold text-blue-600">Bun</span>
        <span className="mx-2 font-bold text-purple-600">React</span>
        <span className="mx-2 font-bold text-teal-600">TypeScript</span>
      </div>
    </div>
  )
}
