import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-blue-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-green-200">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Client Side</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, idx) => (
                  <li 
                    key={idx} 
                    className="bg-white shadow-sm rounded-lg p-3 transform transition-all hover:scale-105 hover:shadow-md"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <span className="mr-2">🚀</span>
            Built with Bun & React
          </div>
        </div>
      </div>
    </div>
  )
}
