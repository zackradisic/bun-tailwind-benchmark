import "./style.css";
import React from 'react';

const FastFullstackDemo: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-4xl font-bold text-blue-600 mb-4 drop-shadow-lg">
                Bun & TailwindCSS: Fullstack Development Made Easy!
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-md text-center">
                Experience the speed and simplicity of building fullstack apps with{' '}
                <span className="font-semibold text-blue-500">Bun</span> and{' '}
                <span className="font-semibold text-blue-500">TailwindCSS</span>.
            </p>
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                Get Started with Bun
            </button>
            <div className="mt-8">
                <img 
                    src="https://placekitten.com/400/300" 
                    alt="Demo" 
                    className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
            </div>
            <footer className="mt-12 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Your Blog
            </footer>
        </div>
    );
}

export default FastFullstackDemo;
