import React from 'react';
import Navbar from './components/Navbar';
import AuthorProfile from './components//AuthorProfile';

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex justify-between">
                <AuthorProfile />
            </div>
        </div>
    );
}

export default App;
