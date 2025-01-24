import React, { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number, name: string }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <pre className="bg-blue-100 p-4 rounded-md text-sm overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Side</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="flex justify-center items-center space-x-2 animate-pulse">
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li 
                      key={user.id} 
                      className="bg-purple-100 p-2 rounded-md text-purple-800 font-medium hover:bg-purple-200 transition-colors"
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-gray-700">
            Full-stack development with 
            <span className="mx-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Bun
            </span>
            is blazingly fast! 🚀
          </p>
        </div>
      </div>
    </div>
  )
}
