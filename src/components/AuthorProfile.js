import React from 'react';

function AuthorProfile() {
    return (
        <div className="grid w-full grid-cols-1 h-svh md:grid-cols-2">
            <div className="bg-[#E6E9E6] flex items-center justify-center">
                <div>
                    <h1 className="mb-4 text-8xl font-bold text-gray-900 font-noticia">
                        Aleksandra <br/>
                        <span className="block">Mazur</span>
                    </h1>
                    <p className="mb-6 text-xl text-gray-700">Author of the best-selling books...</p>
                    <button className="rounded bg-white px-4 py-2 hover:bg-slate-100">
                        Kup powieść
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center bg-white">
                <div className="mx-auto flex w-fit flex-col items-center justify-center">
                    <img src="/images/author-image.jpg" alt="Author" className="w-72 rounded-md shadow-2xl"/>
                    <div className="mt-4 text-sm text-slate-900 max-w-72">
                        Laureatka Ogólnopolskiego Konkursu Literackiego "Pisanie Dobre Na Chandrę" Oświęcim, 2017 rok
                    </div>
                    <p className="relative left-32 mt-2 -rotate-12 transform text-5xl text-gray-800 font-handwritten">Aleksandra</p>
                </div>
            </div>
        </div>
    );
}


export default AuthorProfile;

