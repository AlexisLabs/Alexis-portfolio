'use client';

import React from 'react';
import TopRightNavBar from '../componets/nav.jsx';

export default function ResumePage() {
    return (

        <>
        <TopRightNavBar />

        <main className="max-w-2xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Resume</h1>
            <section>
                <h2 className="text-xl font-semibold mt-4">Experience</h2>
                <ul>
                    <li>Junior Software Developer - Accenture</li>

                </ul>
                <h2 className="text-xl font-semibold mt-4">Education</h2>
                <ul>
                    <li>Lyons Community School (HS) </li>
                </ul>
            </section>
        </main>
        </>
    );
}