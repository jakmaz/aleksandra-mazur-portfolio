import React from 'react';

export default function AboutPage () {
    return (
        <div className="flex flex-col md:flex-row items-center px-8 md:space-x-20 space-y-10 md:space-y-0 justify-center pt-4 pb-16 md:p-10 md:min-h-[calc(100vh-50px)] bg-white">
            <div className="flex justify-center max-w-96">
                <img
                    src="/images/about-image.jpg"
                    alt="Portrait of Aleksandra Mazur"
                    className="rounded-xl"
                />
            </div>
            <div className="flex max-w-2xl flex-col text-lg font-noticia space-y-4">
                <h2 className="mb-4 text-5xl font-bold font-noticia">O mnie</h2>
                <p>
                    I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
                </p>
                <p>
                    I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double
                    click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like
                    on your page. I'm a great place for you to tell a story and let your users know a little more about you.
                </p>
                <p>
                    This is a great space to write long text about your company and your services. You can use this space to go
                    into a little more detail about your company. Talk about your team and what services you provide. Tell your
                    visitors the story of how you came up with the idea for your business and what makes you different from your
                    competitors. Make your company stand out and show your visitors who you are.
                </p>
            </div>
        </div>
    );
};
