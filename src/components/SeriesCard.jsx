import 'react';

export function SeriesCard({seriesData}) {

    return (
        <div className="bg-black bg-opacity-45 backdrop-blur-2xl rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <img src={seriesData.image?.medium} alt={seriesData.name} className="w-full h-40 object-cover object-center"/>
            <div className="p-4">
                <h2 className="text-white text-lg font-semibold">{seriesData.name}</h2>
                <p className="text-gray-600 text-sm mt-1">{seriesData.summary.replace(/<[^>]+>/g, '')}</p>
            </div>
        </div>
    )
}