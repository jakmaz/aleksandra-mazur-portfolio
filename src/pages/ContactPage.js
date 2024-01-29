import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactPage() {
    // Function to handle the sending of the email
    function sendEmail(e) {
        e.preventDefault(); // Prevents default form submission behavior

        emailjs.sendForm('service_vt0yeyb', 'template_fm1dxux', e.target, 'sm4gqS0K2EQHpqGZZ')
            .then((result) => {
                alert('Wiadomość dostarczona!');
                console.log(result.text);
                e.target.reset(); // Optional: to reset the form fields
            }, (error) => {
                alert('Błąd w wysyłaniu wiadomości, spróbuj ponownie');
                console.log(error.text);
            });
    }

    return (
        <div className="flex flex-col justify-center items-center md:min-h-[calc(100vh-50px)] space-y-20 text-center p-10 py-20">
            <div>
                <h1 className="text-3xl font-bold font-noticia md:text-5xl">Skontaktuj się ze mną bezpośrednio</h1>
            </div>
            <form className="flex w-full flex-col items-center justify-center" onSubmit={sendEmail}>
                <div className="flex w-full max-w-xl flex-col space-y-4">
                    <div className="flex flex-col py-2 space-y-10 md:space-y-0 md:space-x-4 md:flex-row">
                        <div className="flex-1 border-b border-black">
                            <input
                                type="text"
                                name="name" // Name attribute is important for EmailJS to map the data
                                placeholder="Imię"
                                className="w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-black focus:outline-none"
                                required // To ensure the field is not empty
                            />
                        </div>
                        <div className="flex-1 border-b border-black">
                            <input
                                type="email"
                                name="email" // Name attribute is important for EmailJS to map the data
                                placeholder="Email"
                                className="w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-black focus:outline-none"
                                required // To ensure the field is not empty
                            />
                        </div>
                    </div>
                    <div className="border-b border-black py-2">
                        <textarea
                            name="message" // Name attribute is important for EmailJS to map the data
                            placeholder="Twoja wiadomość..."
                            rows="4"
                            className="w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-black focus:outline-none"
                            required // To ensure the field is not empty
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="mt-6 w-full rounded border border-black bg-transparent px-4 py-2 font-semibold text-black shadow hover:bg-gray-100 md:w-auto"
                        >
                            Wyślij
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
