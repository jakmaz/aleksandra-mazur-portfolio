import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const useFetchBooks = (limit) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const snapshot = await getDocs(collection(db, 'books'));
            const booksData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            // If a limit is provided, slice the array to get only the first 'limit' books
            setBooks(limit ? booksData.slice(0, limit) : booksData);
        };

        fetchBooks();
    }, [limit]);

    return books;
};

export default useFetchBooks;
