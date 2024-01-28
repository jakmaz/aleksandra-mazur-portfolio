import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function LatestReleases() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const snapshot = await getDocs(collection(db, 'books'));
            const booksData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).slice(0, 2); // Slice the array to get only the first two books
            setBooks(booksData);
        };

        // fetchBooks();
    }, []);

    return (
        <div className="my-10 bg-white">
            <h2 className="mt-10 mb-10 text-center text-4xl md:text-5xl font-bold font-noticia">Ostatnie wydania</h2>
            <div className="flex flex-wrap justify-center space">
                {books.map((book, index) => (
                    <div key={book.id} className={`flex flex-col justify-center items-center h-fit ${index === 1 ? 'mt-6 md:mt-32' : ''}`}>
                        <img src={book.cover} alt={book.title} className="mb-2 w-full" />
                        <h3 className="text-xl md:text-2xl font-noticia font-bold">{book.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
