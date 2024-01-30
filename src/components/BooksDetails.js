import React, {useRef, useState} from 'react';
import { useLocation } from 'react-router-dom';

export default function BookDetails() {
    const location = useLocation();
    const book = location.state.bookInfo;

    return (
        <div
            className="flex flex-col md:flex-row items-center px-8 md:space-x-20 space-y-10 md:space-y-0 justify-center pt-4 pb-16 md:p-10 md:min-h-[calc(100vh-50px)] bg-white">
            <div className="flex justify-center">
                <img
                    src={book.cover}
                    alt={"Photo of the" + book.title}
                    className="rounded-xl max-w-96"
                />
            </div>
            <div className="flex flex-col font-noticia justify-center text-lg w-full md:min-w-96 md:w-96 space-y-4">
                <h1 className="text-3xl font-bold">{book.title}</h1>
                <p className="text-sm text-gray-600">SKU: 0001</p>
                <p className="text-2xl font-semibold my-2">{book.price + " zł"}</p>
                <button className="bg-gray-200 text-gray-800 rounded px-3 py-1 my-2">Brak w magazynie</button>

                <AccordionSection title="PRODUCT INFO">
                    This is some information about the product. Details about the product go here.
                </AccordionSection>

                <AccordionSection title="RETURN & REFUND POLICY">
                    This section contains information about returns and refunds. Include your policies here.
                </AccordionSection>

                <AccordionSection title="SHIPPING INFO">
                    Here you can find information about shipping methods, costs, and time frames.
                </AccordionSection>
            </div>
        </div>
    );
}

const AccordionSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    // Function to toggle accordion visibility
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full">
            <button
                className="flex justify-between items-center w-full text-lg font-semibold text-left py-2"
                onClick={toggleAccordion}
            >
                {title}
                <span>{isOpen ? '−' : '+'}</span>
            </button>
            <div
                className="w-full overflow-hidden transition-height duration-500 ease-in-out"
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0',
                }}
                ref={contentRef}
            >
                <div className="py-2">
                    {children}
                </div>
            </div>
        </div>
    );
};
