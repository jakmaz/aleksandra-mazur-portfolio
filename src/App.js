import Navbar from './components/Navbar';
import AuthorProfile from './components//AuthorProfile';
import LatestReleases from "./components/LatestReleases";
import Reviews from "./components/Reviews";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <AuthorProfile />
            <LatestReleases />
            <Reviews />
        </div>
    );
}
