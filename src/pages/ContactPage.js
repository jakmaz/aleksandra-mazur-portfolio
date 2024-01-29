import React from "react";

export default function ContactPage () {
    return (
        <div className="flex flex-col justify-center items-center md:min-h-[calc(100vh-50px)] space-y-20 text-center p-10 py-20">
            <div>
                <h1 className="text-3xl font-bold font-noticia md:text-5xl">Skontaktuj się ze mną bezpośrednio</h1>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
                <div className="flex w-full max-w-xl flex-col space-y-4">
                    <div className="flex flex-col py-2 space-y-10 md:space-y-0 md:space-x-4 md:flex-row">
                        <div className="flex-1 border-b border-black">
                            <input
                                type="text"
                                placeholder="Imię"
                                className="w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-black focus:outline-none"
                            />
                        </div>
                        <div className="flex-1 border-b border-black">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-black focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="border-b border-black py-2">
                        <textarea
                              placeholder="Twoja wiadomość..."
                              rows="4"
                              className="w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-black focus:outline-none"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="mt-6 w-full rounded border border-black bg-transparent px-4 py-2 font-semibold text-black shadow hover:bg-gray-100 md:w-auto">
                            Wyślij
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};