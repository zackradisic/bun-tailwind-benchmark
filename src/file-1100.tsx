import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([])
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="h-8 w-8 bg-blue-300 rounded-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ) : (
            users.map(user => (
              <div 
                key={user.id} 
                className="bg-blue-50 p-4 rounded-lg shadow-md hover:bg-blue-100 transition-colors flex items-center space-x-4"
              >
                <div className="h-10 w-10 bg-blue-300 rounded-full flex items-center justify-center font-bold text-white">
                  {user.id}
                </div>
                <span className="text-lg font-semibold text-gray-800">{user.name}</span>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 flex flex-col items-center space-y-2">
        <div className="bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
          Built with 🚀 Bun + React + TypeScript
        </div>
        <div className="opacity-70">
          Seamless Fullstack Development
        </div>
      </div>
    </div>
  )
}
