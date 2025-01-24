import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [newUser, setNewUser] = useState({ name: '', email: '' })

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
    const addedUser = await response.json()
    setUsers([...users, addedUser])
    setNewUser({ name: '', email: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-8 transform transition-all hover:scale-[1.02]">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
            {loading ? (
              <div className="animate-spin h-10 w-10 border-4 border-white/50 rounded-full mx-auto"></div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li key={index} className="bg-white/5 p-2 rounded text-white hover:bg-white/10 transition">
                    {user.name} ({user.email})
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <form 
            onSubmit={handleSubmit}
            className="bg-white/10 rounded-xl p-6 border border-white/5 space-y-4"
          >
            <input 
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({...newUser, name: e.target.value})}
              className="w-full p-2 bg-white/10 text-white rounded border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              className="w-full p-2 bg-white/10 text-white rounded border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition transform active:scale-95"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
