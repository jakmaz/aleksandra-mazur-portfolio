import Navbar from './components/Navbar';
import AuthorProfile from './components//AuthorProfile';
import LatestReleases from "./components/LatestReleases";

export default function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <AuthorProfile />
            <LatestReleases />
        </div>
    );
}
