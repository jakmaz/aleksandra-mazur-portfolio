export default function Reviews() {
    return (
        <div className="bg-[#E6E9E6]">
            <div className="flex justify-center items-center p-10">
                <h1 className="font-noticia font-bold text-6xl">Reviews</h1>
            </div>
            <div className="flex justify-center space-x-10 px-72 py-4">
                <div className="flex flex-col items-center bg-white p-4 shadow-md">
                    <p>"I'm a review. Click to edit me and add text from a critic who has evaluated you and your work."</p>
                    <span>— Seattle Daily</span>
                </div>
                <div className="flex flex-col items-center bg-white p-4 shadow-md">
                    <p>"I'm a review. Click to edit me and add text from a critic who has evaluated you and your work."</p>
                    <span>— The Washington Paper</span>
                </div>
                <div className="flex flex-col items-center bg-white p-4 shadow-md">
                    <p>"I'm a review. Click to edit me and add text from a critic who has evaluated you and your work."</p>
                    <span>— T.O.M Magazine</span>
                </div>
            </div>
        </div>
    );
}
