export default function Reviews() {
    return (
        <div className="bg-[#E6E9E6] py-6 md:py-10">
            <div className="flex items-center justify-center p-10">
                <h1 className="text-4xl font-bold font-noticia md:text-5xl">Reviews</h1>
            </div>
            <div className="flex flex-wrap justify-center p-6 px-10 text-center space-y-10 md:space-x-10 md:space-y-0 md:flex-nowrap md:justify-center md:p-10">
                <div className="flex flex-col items-center p-6 md:w-1/4">
                    <p>"I'm a review. Click to edit me and add text from a critic who has evaluated you and your work."</p>
                    <div className="font-bold font-noticia">
                        <span>─</span> <br />
                        <span>Seattle Daily</span>
                    </div>
                </div>
                <div className="flex flex-col items-center p-6 md:w-1/4">
                    <p>"I'm a review. Click to edit me and add text from a critic who has evaluated you and your
                        work."</p>
                    <div className="font-bold font-noticia">
                        <span>─</span> <br/>
                        <span>Seattle Daily</span>
                    </div>
                </div>
                <div className="flex flex-col items-center p-6 md:w-1/4">
                    <p>"I'm a review. Click to edit me and add text from a critic who has evaluated you and your
                        work."</p>
                    <div className="font-bold font-noticia">
                        <span>─</span> <br/>
                        <span>Seattle Daily</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
