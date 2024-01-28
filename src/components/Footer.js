export default function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-white pb-4 px-4">
            <div
                className="flex flex-wrap justify-center p-6 px-10 text-center space-y-10 md:space-x-10 md:space-y-0 md:flex-nowrap md:justify-center md:p-14">

                {/* Column 1 */}
                <div className="flex flex-col items-center md:w-1/4">
                    <h5 className="text-xl pb-2 md:pb-6">Kontakt biznesowy:</h5>
                    <p>123 456 789 | <a href="mailto:a.mazur.70@gmail.com" className="hover:text-slate-300">a.mazur.70@gmail.com</a></p>
                    <p>Kleszczów, Polska</p>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col items-center md:w-1/4 space-y-4 md:space-y-5">
                    <h5 className="text-xl">Zarejestruj się, aby otrzymywać wiadomości i aktualizacje od
                        Aleksandry Mazur</h5>
                    <div className="flex items-center border-b border-white pb-2 justify-center">
                        <input
                            className="appearance-none bg-transparent border-none w-full text-white text-center pb-1 focus:outline-none"
                            type="text"
                            placeholder="Wpisz swój e-mail"
                        />
                    </div>
                    <button className="md:w-32 text-black rounded bg-white px-4 py-2 hover:bg-slate-100 mt-10">Subskrybuj</button>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col items-center md:w-1/4">
                    <h5 className="text-xl pb-2 md:pb-6">Więcej informacji</h5>
                    <a href="/faq" className="hover:text-slate-300">FAQ</a>
                </div>
            </div>
            {/* White Line */}
            <div className="border-t border-white mx-auto" style={{ width: '80%' }}></div>

            {/* Copyright */}
            <div className="text-center mt-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} Aleksandra Mazur</p>
            </div>
        </footer>

    );
}