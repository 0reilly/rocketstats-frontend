import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PrettyVisitorStats, PrettySource } from './types';

const Site: React.FC = () => {
    const [stats, setStats] = useState<PrettyVisitorStats | null>(null);
    const { domain } = useParams<{ domain: string }>();

    useEffect(() => {
        fetch(`https://www.rocketstats.co/api/tracking/${domain}`)
            .then(response => response.json())
            .then(data => {
                // Combine sources with the same origin
                const combinedSources = data.sources.reduce((acc: PrettySource[], curr: PrettySource) => {
                    try {
                        const currOrigin = new URL(curr.referrer).origin;
                        const existingSource = acc.find(source => new URL(source.referrer).origin === currOrigin);
                        if (existingSource) {
                            existingSource.count += curr.count;
                        } else {
                            acc.push({ ...curr, referrer: currOrigin });
                        }
                    } catch (e) {
                        console.log(`Invalid URL: ${curr.referrer}`);
                    }
                    return acc;
                }, []);
                data.sources = combinedSources;
                setStats(data);
            });
    }, []);


    if (!stats) {
        return <div className="text-lg text-center mt-4">Loading...</div>;
    }

    const isValidURL = (string: string) => {
        try {
            new URL(string);
        } catch (_) {
            return false;
        }
        return true;
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-blue-600 py-5">Visitor count: { stats.visitor_count }</h1>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-5">Pageviews</h2>
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        { stats.pageviews.sort((a, b) => b.count - a.count).map(pageview => {

                            try {
                                if (!pageview.url || !isValidURL(pageview.url)) {
                                    console.log(`Invalid URL: ${ pageview.url }`);
                                    return null;
                                }
                                const url = new URL(pageview.url);
                                const truncatedUrl = url.origin + url.pathname;
                                return (
                                    <tr key={ truncatedUrl } className="border-t">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ truncatedUrl }</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ pageview.count }</td>
                                    </tr>
                                );
                            } catch (e) {
                                console.log(e);
                                return null;

                            }
                        }) }
                        </tbody>
                    </table>
                    <h2 className="text-xl font-semibold mb-2 text-blue-500">Locations</h2>
                    <table className="w-full mb-4 bg-white rounded-lg overflow-hidden shadow-lg">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        { stats.locations.sort((a, b) => b.count - a.count).map(location => (
                            <tr key={ location.location }>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ location.location }</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ location.count }</td>
                            </tr>
                        )) }
                        </tbody>
                    </table>
                    <h2 className="text-xl font-semibold mb-2 text-blue-500">Sources</h2>
                    <table className="w-full mb-4 bg-white rounded-lg overflow-hidden shadow-lg">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referrer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        { stats.sources.sort((a, b) => b.count - a.count).map(source => {
                            //try catch for invalid urls

                            try {
                                if (!source.referrer || !isValidURL(source.referrer)) {
                                    console.log(`Invalid URL: ${ source.referrer }`);
                                    return null;
                                }
                                const url = new URL(source.referrer);
                                const truncatedUrl = url.origin;

                                return (
                                    <tr key={ truncatedUrl }>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ truncatedUrl }</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ source.count }</td>
                                    </tr>
                                );
                            } catch (e) {
                                console.log(e);
                                return null;

                            }
                        }) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Site;
