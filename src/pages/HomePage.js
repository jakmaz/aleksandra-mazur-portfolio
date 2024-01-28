import React from 'react';
import AuthorProfile from '../components/AuthorProfile';
import Reviews from '../components/Reviews';
import LatestReleases from "../components/LatestReleases";

export default function HomePage () {
    return (
        <main>
            <AuthorProfile />
            <LatestReleases />
            <Reviews />
        </main>
    );
};
