import "./style.css";
import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([])
  const [serverTime, setServerTime] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users')
        const timeResponse = await fetch('/api/time')
        const userData = await userResponse.json()
        const timeData = await timeResponse.json()
        
        setUsers(userData)
        setServerTime(timeData.time)
      } catch (error) {
        console.error('Failed to fetch data', error)
      }
    }
    
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic 🚀
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Details</h2>
            <div className="space-y-2">
              <p className="text-sm font-medium text-blue-600">
                Server Time: 
                <span className="ml-2 bg-blue-200 px-2 py-1 rounded-full">
                  {serverTime || 'Loading...'}
                </span>
              </p>
              <div className="h-0.5 bg-blue-200 my-2"></div>
              <p className="text-xs text-blue-500">
                Powered by Bun's blazing fast runtime ⚡️
              </p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Users</h2>
            <ul className="space-y-2">
              {users.length === 0 ? (
                <li className="text-sm text-purple-600 animate-pulse">
                  Fetching users...
                </li>
              ) : (
                users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-purple-100 px-3 py-2 rounded-lg text-sm text-purple-800 transform transition-all hover:scale-105"
                  >
                    {user.name || 'Unknown User'}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500 mt-4">
        Built with ❤️ using Bun, React, and Tailwind
      </div>
    </div>
  )
}
