import { Star, Calendar, Clock } from 'lucide-react';

export function MetaInfo({ rating, premiered, runtime }) {
    return (
        <div className="mb-3 flex gap-4">
            {rating?.average && (
                <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={16} className="fill-yellow-400" />
                    <span className="text-sm">{rating.average}</span>
                </div>
            )}
            {premiered && (
                <div className="flex items-center gap-1 text-gray-300">
                    <Calendar size={16} />
                    <span className="text-sm">
            {new Date(premiered).getFullYear()}
          </span>
                </div>
            )}
            {runtime && (
                <div className="flex items-center gap-1 text-gray-300">
                    <Clock size={16} />
                    <span className="text-sm">{runtime}min</span>
                </div>
            )}
        </div>
    );
}