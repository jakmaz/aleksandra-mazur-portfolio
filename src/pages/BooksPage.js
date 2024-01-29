import React from "react";
import useFetchBooks from "../hooks/useFetchBooks";
import {Link} from "react-router-dom";

export default function BooksPage () {
    const books = useFetchBooks(); // Limit to 2 books

    return (
        <div
            className="py-12 md:pb-28 md:min-h-[calc(100vh-50px)] flex flex-col justify-center md:space-y-10">
            <div className="flex items-center justify-center">
                <h1 className="text-4xl font-bold font-noticia md:text-5xl">Książki</h1>
            </div>
            <div className="flex flex-wrap justify-center">
                {books.map((book, index) => (
                    <Link
                        to={`/books/${book.title.split(" ").join("-").toLowerCase()}`}
                        state={{bookInfo: book}}
                        key={book.id}
                        className={`flex flex-col justify-center items-center w-80`}
                    >
                        <img src={book.cover} alt={book.title} className="mb-2 w-full" />
                        <h3 className="text-xl font-bold font-noticia md:text-2xl">{book.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};