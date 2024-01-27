export default function Navbar() {
    return (
        <div className="bg-white shadow-md">
            <div className="text-center pt-7">
                <span className="text-3xl font-noticia font-bold text-gray-800">Aleksandra Mazur</span>
            </div>
            <nav className="flex justify-center p-5">
                <div className="flex space-x-20">
                    <a href="/" className="text-gray-800 hover:text-gray-600 transition-colors">Strona Główna</a>
                    <a href="/about" className="text-gray-800 hover:text-gray-600 transition-colors">O mnie</a>
                    <a href="/books" className="text-gray-800 hover:text-gray-600 transition-colors">Książki</a>
                    <a href="/reviews" className="text-gray-800 hover:text-gray-600 transition-colors">Recenzje</a>
                    <a href="/contact" className="text-gray-800 hover:text-gray-600 transition-colors">Kontakt</a>
                </div>
            </nav>
        </div>
    );
}
