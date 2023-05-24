import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <header className="text-center py-5">
                <h1 className="text-5xl font-bold">Welcome to RocketStats</h1>
                <nav className="py-4">
                    <a href="#pricing" className="text-lg px-4">Pricing</a>
                    // Add more navigation links as needed...
                </nav>
            </header>

            <main className="flex flex-col items-center justify-center flex-grow text-center">
                <p className="text-lg text-gray-700">Track your website performance with ease.</p>
                <section id="pricing" className="my-4 p-4 border rounded shadow text-center">
                    <h2 className="text-2xl font-bold mb-2">Flat Rate Pricing</h2>
                    <div className="text-5xl">$10/month</div>
                </section>
                // Add more sections as needed...
            </main>

            <footer className="text-center py-3 bg-gray-200 mt-4">
                <p>© 2023 RocketStats</p>
            </footer>
        </div>
    );
};

export default Home;
