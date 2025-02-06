import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverMessage, setServerMessage] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerMessage(data.message);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchServerData();
  }, []);

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        const response = await fetch('/api/todos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ todo: newTodo })
        });
        const data = await response.json();
        setTodoList(data.todos);
        setNewTodo('');
      } catch (error) {
        console.error('Failed to add todo', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight drop-shadow-lg">
          ⚡ Bun Fullstack Magic ⚡
        </h1>
        
        <div className="bg-white/30 rounded-xl p-4 mb-4 shadow-inner">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Server Response:</h2>
          <p className="text-gray-800 font-medium animate-pulse">
            {serverMessage || 'Connecting to server...'}
          </p>
        </div>

        <div className="flex space-x-2 mb-4">
          <input 
            type="text" 
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo" 
            className="flex-grow px-4 py-2 rounded-lg bg-white/50 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button 
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition transform active:scale-95"
          >
            Add
          </button>
        </div>

        <div className="bg-white/30 rounded-xl p-4 max-h-48 overflow-y-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Todo List:</h2>
          {todoList.length === 0 ? (
            <p className="text-gray-700 italic">No todos yet...</p>
          ) : (
            <ul className="space-y-2">
              {todoList.map((todo, index) => (
                <li 
                  key={index} 
                  className="bg-white/50 px-3 py-2 rounded-md shadow-sm flex justify-between items-center"
                >
                  {todo}
                  <span className="text-green-600 font-bold">✓</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-white text-sm opacity-70 text-center">
        Built with 🔥 Bun + React + TypeScript 🔥
      </div>
    </div>
  );
}
