import React from 'react';

function AuthorProfile() {
    return (
        <div className="flex flex-wrap md:h-svh">
            <div className="bg-[#E6E9E6] flex items-center w-full md:w-1/2 h-full">
                <div className="flex flex-col space-y-6 mx-auto p-10 text-center md:text-left">
                    <h1 className=" text-3xl font-bold leading-tight text-gray-900 font-noticia lg:text-5xl xl:text-8xl">
                        Aleksandra Mazur
                    </h1>
                    <p className="text-lg text-gray-700 md:text-xl">Author of the best-selling books...</p>
                    <button className="md:w-32 rounded bg-white px-4 py-2 hover:bg-slate-100">
                        Kup powieść
                    </button>
                </div>
            </div>
            <div className="order-first flex w-full items-center justify-center bg-white p-10 pt-2 md:p-0 md:order-last md:w-1/2">
                <div className="flex w-full flex-col items-center justify-center md:w-72">
                    <img src="/images/author-image.jpg" alt="Author" className="rounded-xl shadow-2xl"/>
                    <div className="mt-4 text-sm text-slate-900">
                        Laureatka Ogólnopolskiego Konkursu Literackiego "Pisanie Dobre Na Chandrę" Oświęcim, 2017 rok
                    </div>
                    <p className="relative bottom-5 left-1/4 mt-2 -rotate-12 transform text-5xl text-gray-800 font-handwritten md:left-1/3">Aleksandra</p>

                </div>
            </div>
        </div>
    );
}


export default AuthorProfile;

