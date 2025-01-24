import React from 'react';

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Bun with Tailwind!</h1>
                <p className="text-gray-700 mb-6">This is a demo of Bun's integration with Tailwind CSS.</p>
                <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300">
                    Click Me
                </button>
                <div className="mt-5">
                    <h2 className="text-lg font-semibold text-gray-800">Server Response:</h2>
                    <div className="bg-gray-200 p-2 rounded">
                        <p id="server-response" className="text-gray-600"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
