'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TopRightNavBar() {
    const [isClient, setIsClient] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <nav className="fixed top-0 right-0 z-50 p-2">
            <div className="flex items-center space-x-2">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center bg-white/90 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 border border-gray-200/50">
                    <div className="flex items-center space-x-4">

                        <Link href="/" className="text-gray-600 hover:text-purple-400 transition-colors duration-400 cursor-pointer">
                            <span className="text-sm font-medium">Home</span>
                        </Link>

                        <Link href="/front-end/about-me" className="text-gray-600 hover:text-purple-400 transition-colors duration-400 cursor-pointer">
                            <span className="text-sm font-medium">About Me</span>
                        </Link>

                        <a
                            href="https://github.com/AlexisLabs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-purple-400 transition-colors duration-400 cursor-pointer"
                        >
                            <span className="text-sm font-medium">Github</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/alexisymartinez/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BjNGshI3rT%2FutR2Ox4QBAYw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-purple-400 transition-colors duration-400 cursor-pointer"
                        >
                            <span className="text-sm font-medium">LinkedIn</span>
                        </a>


                        <Link href="/front-end/resume" className="text-gray-600 hover:text-purple-400 transition-colors duration-400 cursor-pointer">
                            <span className="text-sm font-medium">Resume</span>
                        </Link>

                    </div>

                </div>

                {/* Mobile Navigation Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full border border-gray-200/50 text-gray-600 hover:text-Purple-400 transition-colors duration-200"
                    >
                        <div className="w-5 h-5 flex items-center justify-center text-lg font-bold">
                            {isMenuOpen ? '✕' : '☰'}
                        </div>
                    </button>
                </div>
            </div>
            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-1 bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl border border-gray-200/50 py-2 px-2 min-w-48">
                    <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-purple-400 hover:bg-red-50/50 rounded-xl transition-all duration-200">
                        <span className="text-sm font-medium">Home</span>
                    </Link>

                    <Link href="/front-end/about-me" className="block px-3 py-2 text-gray-600 hover:text-purple-400 hover:bg-red-50/50 rounded-xl transition-all duration-200 cursor-pointer">
                        <span className="text-sm font-medium">Timeline</span>
                    </Link>

                    <a href="https://github.com/AlexisLabs" className="block px-3 py-2 text-gray-600 hover:text-purple-400 hover:bg-red-50/50 rounded-xl transition-all duration-200 cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer">
                        <span className="text-sm font-medium">Github</span>
                    </a>

                    <a href="https://www.linkedin.com/in/alexisymartinez/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BjNGshI3rT%2FutR2Ox4QBAYw%3D%3D" className="block px-3 py-2 text-gray-600 hover:text-purple-400 hover:bg-red-50/50 rounded-xl transition-all duration-200 cursor-pointer"
                       target="_blank"
                       rel="noopener noreferrer">
                        <span className="text-sm font-medium">LinkedIn</span>
                    </a>

                    <Link href="/front-end/resume" className="block px-3 py-2 text-gray-600 hover:text-purple-400 hover:bg-red-50/50 rounded-xl transition-all duration-200 cursor-pointer">
                        <span className="text-sm font-medium">Resume</span>
                    </Link>
                </div>
            )}
        </nav>
    );
}