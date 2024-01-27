export default function Navbar() {
    return (
        <div className="bg-white shadow-md">
            <div className="pt-7 text-center">
                <span className="text-3xl font-bold text-gray-800 font-noticia">Aleksandra Mazur</span>
            </div>
            <nav className="flex justify-center p-5">
                <div className="flex space-x-20">
                    <a href="/" className="text-gray-800 transition-colors hover:text-gray-600">Strona Główna</a>
                    <a href="/about" className="text-gray-800 transition-colors hover:text-gray-600">O mnie</a>
                    <a href="/books" className="text-gray-800 transition-colors hover:text-gray-600">Książki</a>
                    <a href="/reviews" className="text-gray-800 transition-colors hover:text-gray-600">Recenzje</a>
                    <a href="/contact" className="text-gray-800 transition-colors hover:text-gray-600">Kontakt</a>
                </div>
            </nav>
        </div>
    );
}
