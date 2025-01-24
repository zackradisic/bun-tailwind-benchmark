import React from "react";

const App: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App</h1>
            <p className="text-lg text-gray-700 mb-8">
                This application is powered by Bun, React, and TypeScript!
            </p>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg transition duration-300 hover:bg-blue-600">
                Click Me!
            </button>
            <div className="mt-10 p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">Server Response:</h2>
                <pre className="border p-4 bg-gray-50 text-gray-800">
                    {JSON.stringify({ message: "Hello from the server!" }, null, 2)}
                </pre>
            </div>
        </div>
    );
};

export default App;
