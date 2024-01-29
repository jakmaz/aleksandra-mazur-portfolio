import React from 'react';
import useFetchBooks from '../hooks/useFetchBooks';
import {Link} from "react-router-dom"; // Ensure this path is correct

export default function LatestReleases() {
    const books = useFetchBooks(2); // Limit to 2 books

    return (
        <div className="bg-white py-6 md:py-10">
            <h2 className="mt-10 mb-10 text-center text-4xl font-bold font-noticia md:text-5xl">Ostatnie wydania</h2>
            <div className="flex flex-wrap justify-center space">
                {books.map((book, index) => (
                    <Link
                        to={`/books/${book.title.split(" ").join("-").toLowerCase()}`}
                        state={{bookInfo: book}}
                        key={book.id}
                        className={`flex flex-col justify-center items-center h-fit ${index === 1 ? 'mt-6 md:mt-32' : ''}`}
                    >
                        <img src={book.cover} alt={book.title} className="mb-2 w-full" />
                        <h3 className="text-xl font-bold font-noticia md:text-2xl">{book.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}
