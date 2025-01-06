import { useState } from 'react';
import { Filter } from 'lucide-react';

function Filters({ onFilterChange }) {
    const [activeFilter, setActiveFilter] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
        onFilterChange({ genre: e.target.value, year: selectedYear });
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
        onFilterChange({ genre: selectedGenre, year: e.target.value });
    };

    return (
        <div className="flex items-center gap-4">
            <div className={`relative group ${activeFilter === 'genre' ? 'z-10' : ''}`}>
                <select
                    value={selectedGenre}
                    onChange={handleGenreChange}
                    onFocus={() => setActiveFilter('genre')}
                    onBlur={() => setActiveFilter(null)}
                    className="w-40 h-10 pl-10 pr-4 rounded-lg appearance-none
                        bg-gray-800/50 border border-gray-700/50
                        text-gray-300 cursor-pointer
                        focus:bg-gray-800/80 focus:border-blue-500/50
                        group-hover:border-gray-600/50
                        transition-all duration-300 ease-out"
                >
                    <option value="">All Genres</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                    <option value="horror">Horror</option>
                    <option value="sci-fi">Sci-Fi</option>
                </select>
                <Filter
                    className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5
                        text-gray-500 group-hover:text-gray-400
                        transition-all duration-300
                        ${activeFilter === 'genre' ? 'text-blue-400' : ''}
                        ${activeFilter === 'genre' ? 'animate-pulse' : ''}`}
                />
                <div className={`absolute inset-0 -z-10 rounded-lg
                    bg-blue-500/10 opacity-0 blur-xl
                    group-hover:opacity-100
                    transition-all duration-300
                    ${activeFilter === 'genre' ? 'opacity-100 scale-105' : ''}`}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            <div className={`relative group ${activeFilter === 'year' ? 'z-10' : ''}`}>
                <select
                    value={selectedYear}
                    onChange={handleYearChange}
                    onFocus={() => setActiveFilter('year')}
                    onBlur={() => setActiveFilter(null)}
                    className="w-36 h-10 pl-10 pr-4 rounded-lg appearance-none
                        bg-gray-800/50 border border-gray-700/50
                        text-gray-300 cursor-pointer
                        focus:bg-gray-800/80 focus:border-blue-500/50
                        group-hover:border-gray-600/50
                        transition-all duration-300 ease-out"
                >
                    <option value="">All Years</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
                <Filter
                    className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5
                        text-gray-500 group-hover:text-gray-400
                        transition-all duration-300
                        ${activeFilter === 'year' ? 'text-blue-400' : ''}
                        ${activeFilter === 'year' ? 'animate-pulse' : ''}`}
                />
                <div className={`absolute inset-0 -z-10 rounded-lg
                    bg-blue-500/10 opacity-0 blur-xl
                    group-hover:opacity-100
                    transition-all duration-300
                    ${activeFilter === 'year' ? 'opacity-100 scale-105' : ''}`}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Filters;