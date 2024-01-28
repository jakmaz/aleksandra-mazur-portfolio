import React, {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false  );
    return (
        <div className="bg-white shadow-md">
            <nav>
                <div className="flex flex-wrap md:justify-center">
                    <div className="px-7 py-5 flex justify-between mobile-menu md:hidden w-full text-center ">
                        <span className="text-2xl font-bold text-gray-800 font-noticia">Aleksandra Mazur</span>
                        {!navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)}
                                    className="flex items-center px-3 py-2 border rounded border-black text-black">
                                <Bars3Icon className="h-5 w-5"/>
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)}
                                    className="flex items-center px-3 py-2 border rounded border-black text-black">
                                <XMarkIcon className="h-5 w-5"/>
                            </button>
                        )}
                    </div>
                    <div className="p-4 menu hidden md:block space-x-10">
                        <a href="/" className="text-gray-800 transition-colors hover:text-gray-600">Strona Główna</a>
                        <a href="/about" className="text-gray-800 transition-colors hover:text-gray-600">O mnie</a>
                        <a href="/books" className="text-gray-800 transition-colors hover:text-gray-600">Książki</a>
                        <a href="/reviews" className="text-gray-800 transition-colors hover:text-gray-600">Recenzje</a>
                        <a href="/contact" className="text-gray-800 transition-colors hover:text-gray-600">Kontakt</a>
                    </div>
                </div>
                {navbarOpen ? <MenuOverlay navbarOpen={navbarOpen}/> : null}
            </nav>
        </div>
    );
}
