import React, { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([])
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
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <pre className="text-sm text-gray-700 bg-blue-100 p-4 rounded-lg">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      const users = await Bun.sql\`SELECT * FROM users\`
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Side</h2>
            <pre className="text-sm text-gray-700 bg-purple-100 p-4 rounded-lg">
              {`const [users, setUsers] = useState([])
useEffect(() => {
  fetch('/api/users')
    .then(res => res.json())
    .then(setUsers)
}, [])`}
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-gray-100 rounded-xl p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Users</h3>
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          ) : (
            <ul className="space-y-3">
              {users.map((user, index) => (
                <li 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 hover:bg-blue-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {user.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-white text-center opacity-70">
        <p>Built with 🚀 Bun, React & TypeScript</p>
      </div>
    </div>
  )
}
