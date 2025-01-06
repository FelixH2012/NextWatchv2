import {classNames} from '../../utils/utils.jsx';
import {CardImage, FullCardImage} from "./CardImage.jsx";
import {SeriesMetadata} from "./SeriesMetadata.jsx";


export function SeriesCard({seriesData, className}) {
    return (
        <div
            className={classNames(
                "group relative h-64 overflow-hidden rounded-2xl transition-all duration-300",
                className
            )}
        >
            <FullCardImage
                src={seriesData.image?.medium}
                alt={seriesData.name}
                className="absolute h-full w-full object-cover object-center"
            />

            <div className="container absolute px-44 pr-0 ">
                {content({seriesData})}
            </div>

            <CardImage src={seriesData.image?.medium} alt={seriesData.name}
                       className="absolute inset-0 h-full w-full object-cover object-center"/>

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90"/>

            <div className="absolute right-0 bottom-0  p-4">
                <SeriesMetadata runtime={seriesData.runtime} rating={seriesData.rating} premiered={seriesData.premiered}/>
            </div>

        </div>

    );
}

function content({seriesData}) {
    return (
        <div className="container bg-gray-950 p-4 shadow-2xl">
            <div className="pl-2 flex-col">
                <h2 className="text-white text-2xl font-semibold">{seriesData.name}</h2>
                {
                    seriesData.genres && (
                        <p className="text-gray-400 text-sm mt-1">
                            {seriesData.genres.join(', ')}
                        </p>
                    )
                }
            </div>
        </div>

    );
}