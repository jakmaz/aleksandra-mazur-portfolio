import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BooksPage from "./pages/BooksPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/reviews" element={<ReviewsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
