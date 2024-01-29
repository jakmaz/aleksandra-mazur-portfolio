export default function MenuOverlay() {
    return (
        <div className="flex flex-col space-y-2 mb-3 items-center">
            <a href="/" className="text-gray-800 transition-colors hover:text-gray-600">Strona Główna</a>
            <a href="/about" className="text-gray-800 transition-colors hover:text-gray-600">O mnie</a>
            <a href="/books" className="text-gray-800 transition-colors hover:text-gray-600">Książki</a>
            <a href="/reviews" className="text-gray-800 transition-colors hover:text-gray-600">Recenzje</a>
            <a href="/contact" className="text-gray-800 transition-colors hover:text-gray-600">Kontakt</a>
        </div>
    );
};