import "@fontsource/poppins";

import './App.css'
import Header from "./components/Header.jsx";
import {getPopularShows, searchShows} from "./api/TVMaze.js";
import {useEffect, useState} from "react";
import {SeriesCard} from "./components/SeriesCard.jsx";


function App() {
    const [query] = useState('');
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSeries = async () => {
            setLoading(true);
            try {
                if (query) {
                    const results = await searchShows(query);
                    setSeries(results.map(item => item.show));
                } else {
                    const shows = await getPopularShows();
                    setSeries(shows.slice(0, 12));
                }
            } catch (error) {
                console.error('Error fetching series:', error);
            } finally {
                setLoading(false);
            }
        };
        const debounce = setTimeout(fetchSeries, 300);
        return () => clearTimeout(debounce);
    }, [query]);
    return (
        <div className="min-h-screen bg-gray-950">
            <Header/>

            <main className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {series.map((show) => (
                            <SeriesCard key={show.id} seriesData={show}/>
                        ))}
                    </div>
                )}
            </main>


        </div>
    )
}

export default App
