import { Calendar, Star, Timer } from 'lucide-react';
import {Tooltip} from "./Tooltip.jsx";

export function SeriesMetadata({ runtime, rating, premiered }) {
    return (
        <div className="flex items-center gap-7 p-2 bg-black/50 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-black/60">
            {runtime && (
                <Tooltip content="Episode Duration">
                    <div className="flex items-center gap-2 text-whitehover:text-blue-400 transition-colors">
                        <Timer size={16} color={"white"}/>
                        <span className="text-white">{runtime} min</span>
                    </div>
                </Tooltip>
            )}

            {rating?.average && (
                <Tooltip content="Average Rating">
                    <div className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 transition-colors">
                        <Star size={16} className="fill-current" />
                        <span className="text-sm">{rating.average}</span>
                    </div>
                </Tooltip>
            )}

            {premiered && (
                <Tooltip content="Release Year">
                    <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <Calendar size={16} />
                        <span>{new Date(premiered).getFullYear()}</span>
                    </div>
                </Tooltip>
            )}
        </div>
    );
}