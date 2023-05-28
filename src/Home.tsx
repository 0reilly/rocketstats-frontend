import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <nav className="bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-8 w-8" src="/logo.svg" alt="RocketStats Logo" />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-800" to=''>Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="bg-blue-700 py-10">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-white">RocketStats</h1>
                    <p className="mt-2 text-lg text-blue-200">Your alternative to Google Analytics</p>
                    <div className="mt-8">
                        <Link to="/trial" className="inline-block px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-100">Start Your Trial</Link>
                    </div>
                </div>
            </header>

            <main>
                <div className="bg-gray-100 py-10">
                    <h2 className="text-2xl font-bold text-center text-gray-700">Why RocketStats?</h2>
                    <div className="mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-gray-500">
                            RocketStats offers a fresh approach to website analytics. We prioritize privacy, simplicity, and effective insights.
                        </p>

                        {/* Features Section */}
                        <section className="pt-10">
                            <div className="mt-10">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Key Features</h3>
                                <div className="mt-4 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                                    <div>
                                        <h4 className="text-lg leading-6 font-medium text-gray-900">User Privacy</h4>
                                        <p className="mt-2 text-base text-gray-500">
                                            We respect your users' privacy and don't use cookies to track their visits.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg leading-6 font-medium text-gray-900">Real-time Data</h4>
                                        <p className="mt-2 text-base text-gray-500">
                                            Get real-time insights into your website's traffic patterns and visitor behavior.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg leading-6 font-medium text-gray-900">Easy Integration</h4>
                                        <p className="mt-2 text-base text-gray-500">
                                            Integrating RocketStats into your website is as simple as copying and pasting a line of code.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Customer Review Section */}
                        <section className="pt-10">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">What our customers say</h3>
                            <div className="mt-8">
                                <blockquote>
                                    <div>
                                        <p className="text-base text-gray-500">
                                            "RocketStats gives me the insights I need without compromising the privacy of my users. It's an essential tool for my website."
                                        </p>
                                    </div>
                                    <footer className="mt-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex-shrink-0">
                                                <img className="h-6 w-6 rounded-full" src="/avatar.jpg" alt=""/>
                                            </div>
                                            <div className="text-base font-medium text-gray-700">
                                                Jessica, website owner
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </section>

                        {/* Call to Action Section */}
                        <section className="py-10 text-center">
                            <h3 className="text-2xl font-semibold text-gray-700">Start Your Free Trial Now</h3>
                            <p className="mt-4 text-lg text-gray-500">Get started with RocketStats today and see the difference for yourself.</p>
                            <div className="mt-8">
                                <Link to="/trial" className="inline-block px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-100">Start Your Trial</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>


            <footer className="bg-blue-700 py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-base text-blue-200">
                        &copy; {new Date().getFullYear()} RocketStats. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
