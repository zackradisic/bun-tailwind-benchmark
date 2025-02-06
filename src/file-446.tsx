import "./style.css";
import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-blue-600 text-white p-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight animate-pulse">
            🚀 Bun Fullstack Magic
          </h1>
          <p className="mt-2 text-lg opacity-80">
            React + TypeScript + Bun = Developer Bliss
          </p>
        </div>
        
        <div className="p-8">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-bounce">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Side</h2>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users)
    }
  }
})`}
                </pre>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Client Side</h2>
                <ul className="space-y-2">
                  {users.map((user: any) => (
                    <li 
                      key={user.id} 
                      className="bg-white p-3 rounded-lg shadow-sm hover:bg-blue-100 transition-colors"
                    >
                      {user.name} - {user.email}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="bg-blue-100 p-4 text-center text-sm text-blue-800">
          Built with ❤️ using Bun, React & TypeScript
        </div>
      </div>
    </div>
  )
}
