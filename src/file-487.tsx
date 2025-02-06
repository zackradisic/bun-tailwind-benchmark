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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            ⚡ Bun Fullstack Magic ⚡
          </h1>
        </div>
        
        <div className="p-8">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-bounce">
              <div className="w-5 h-5 bg-indigo-500 rounded-full"></div>
              <div className="w-5 h-5 bg-purple-500 rounded-full"></div>
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-tr from-white to-gray-100 border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <h2 className="text-xl font-bold text-indigo-700 mb-2">
                    {user.name}
                  </h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="bg-gray-100 p-6 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with 🚀 Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  )
}
