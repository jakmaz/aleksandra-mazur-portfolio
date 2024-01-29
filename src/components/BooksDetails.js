import React from 'react';
import { useLocation } from 'react-router-dom';

export default function BookDetails() {
    const location = useLocation();
    const book = location.state.bookInfo;

    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
        </div>
    );
}
