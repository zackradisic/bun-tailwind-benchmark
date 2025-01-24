import React from 'react';

const App: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
            <p className="text-lg text-gray-700 mb-8">This is a fullstack application using React and TypeScript.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-green-500">Client Section</h2>
                    <p className="text-gray-600">This is where your client-side code lives, powered by Bun's amazing performance!</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-red-500">Server Section</h2>
                    <p className="text-gray-600">This handles API requests and serves your HTML files seamlessly.</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-purple-500">Tailwind Integration</h2>
                    <p className="text-gray-600">Utilize the power of Tailwind CSS and Bun’s bundling capabilities effortlessly!</p>
                </div>
            </div>
            <footer className="mt-8 text-gray-500">
                <p>&copy; {new Date().getFullYear()} Bun Fullstack App</p>
            </footer>
        </div>
    );
};

export default App;
