export function Showoff({seriesData}) {
    console.log(seriesData.name);
    return (
        <div className="bg-white rounded-xl shadow-md transition-transform max-w-2xl h-40">
            <h2 className="text-gray-950">{seriesData.name}</h2>
        </div>
    )
}