import React from 'react';

function AuthorProfile() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-svh">
            <div className="bg-[#E6E9E6] flex items-center justify-center">
                <div>
                    <h1 className="text-8xl font-bold text-gray-900 mb-4">
                        Aleksandra <br/>
                        <span className="block">Mazur</span>
                    </h1>
                    <p className="text-xl text-gray-700 mb-6">Author of the best-selling books...</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Kup powieść
                    </button>
                </div>
            </div>
            <div className="bg-white flex items-center justify-center">
                <div className="w-fit mx-auto flex flex-col items-center justify-center">
                    <img src="/images/author-image.jpg" alt="Author" className="w-72 rounded-md shadow-2xl"/>
                    <div className="max-w-72 text-sm text-gray-600 mt-8">
                        Laureatka Ogólnopolskiego Konkursu Literackiego "Pisanie Dobre Na Chandrę" Oświęcim, 2017 rok
                    </div>
                    <div className="text-gray-800 font-handwriting mt-2">Aleksandra</div>
                </div>
            </div>
        </div>
    );
}


export default AuthorProfile;

