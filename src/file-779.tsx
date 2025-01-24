import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack apps has never been easier.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Client Button</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">API Button</button>
      </div>
      <div className="mt-10 w-full max-w-md">
        <form className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Message</h2>
          <input
            type="text"
            placeholder="Type your message"
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Send</button>
        </form>
      </div>
    </div>
  );
};

export default App;
