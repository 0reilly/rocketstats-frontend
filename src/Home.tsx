import React from 'react';

const Home: React.FC = () => {
    const Title: React.FC = () => (
        <h1 className="text-3xl font-bold text-gray-900 text-center">
            RocketStats: Your Privacy-Friendly Analytics Alternative
        </h1>
    );

    const Subtitle: React.FC = () => (
        <h2 className="text-xl text-gray-600 text-center">
            Website analytics doesn't have to compromise privacy. With RocketStats, get meaningful insights while respecting user data.
        </h2>
    );

    const CallToAction: React.FC = () => (
        <div className="mt-5 flex justify-center">
            <a
                href="/trial"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >
                Get started for free
            </a>
        </div>
    );

    const Features: React.FC = () => (
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <p className="text-lg leading-6 font-medium text-gray-900 text-center">
                    No cookie notices required
                </p>
            </li>
            <li className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <p className="text-lg leading-6 font-medium text-gray-900 text-center">
                    GDPR Compliant
                </p>
            </li>
            <li className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <p className="text-lg leading-6 font-medium text-gray-900 text-center">
                    30-day free trial
                </p>
            </li>
        </ul>
    );


    const UserGuide: React.FC = () => (
        <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
                Getting Started With RocketStats is Easy
            </h2>
            <div className="mt-4 text-gray-600">
                <ol className="list-decimal list-inside">
                    <li>Sign up for an account. Start with a 30-day free trial, then pricing starts at $14/month.</li>
                    <li>Add our script. It's a single line of code that works with every site, web app, and CMS.</li>
                    <li>See your stats. Your RocketStats dashboard will start showing you real-time data.</li>
                </ol>
            </div>
        </section>
    );

    const AboutUs: React.FC = () => (
        <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
                RocketStats: Putting User Privacy First
            </h2>
            <div className="mt-4 text-gray-600">
                <p>
                    We built RocketStats to be privacy-focused and easy to use. Our business model is straightforward and unusual for the industry: we charge a fair price for our software instead of giving it away for free, then selling your data to generate revenue. We believe that by supporting RocketStats, you are taking a step towards a more ethical, privacy-respecting approach to website analytics.
                </p>
            </div>
        </section>
    );

    return (
        <div className="p-10">
            <Title />
            <Subtitle />
            <CallToAction />
            <Features />
            <UserGuide />
            <AboutUs />
        </div>
    );
};

export default Home;
