import "./style.css";
import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([])
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-wide">
            ⚡ Bun Fullstack Magic ⚡
          </h1>
        </div>
        
        <div className="p-8">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-4 border-indigo-500 pb-2">
                User List 👥
              </h2>
              <ul className="space-y-4">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-200 hover:shadow-xl"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600 italic">
            Built with 💖 using Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  )
}

// For client-side rendering
document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root')!)
  root.render(<BunFullstackDemo />)
})
