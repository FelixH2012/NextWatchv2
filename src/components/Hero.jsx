import {Play, Info} from "lucide-react"

export const FeaturedSeries = ({seriesData}) => {
    if (!seriesData) return null

    const backgroundImage =
        seriesData.image?.original ||
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop"

    return (
        <div className="relative h-[80vh] w-full">
            <div className="absolute inset-0">
                <div
                    className=" w-full h-full "
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top"
                    }}
                />
                <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-black/50 to-gray-950"
                    style={{pointerEvents: 'none'}}
                />
            </div>
            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {seriesData.name}
                        </h1>

                        <div className="flex items-center gap-2 text-gray-300 mb-4">
              <span className="text-green-500 font-semibold">
                {seriesData.rating?.average || "8.5"} Rating
              </span>
                            <span className="mx-2">•</span>
                            <span>{seriesData.premiered?.split("-")[0] || "2024"}</span>
                            <span className="mx-2">•</span>
                            <span>{seriesData.runtime} min</span>
                        </div>

                        <p className="text-gray-300 text-lg mb-8 line-clamp-3">
                            {seriesData.summary?.replace(/<[^>]*>/g, "") ||
                                "An exciting new series that will keep you on the edge of your seat."}
                        </p>

                        <div className="flex gap-4">
                            <button
                                className="flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition">
                                <Play className="w-5 h-5"/>
                                Play
                            </button>
                            <button
                                className="flex items-center gap-2 px-8 py-3 bg-gray-600/70 text-white rounded-lg font-semibold hover:bg-gray-600 backdrop-blur-md transition">
                                <Info className="w-5 h-5"/>
                                More Info
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedSeries