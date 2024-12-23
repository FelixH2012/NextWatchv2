import { Search } from 'lucide-react';
import { useState } from 'react';

function Header() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50">
            <div className="container max-w-full h-16 bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800">
                <div className="h-full px-6 flex items-center justify-between">
                    <div className={`relative w-64 group ${isFocused ? 'w-96' : ''} transition-all duration-300 ease-out`}>
                        <input
                            type="text"
                            placeholder="Search..."
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="w-full h-10 pl-11 pr-4 rounded-lg
                                bg-gray-800/50 border border-gray-700/50
                                text-gray-100 placeholder-gray-500
                                focus:bg-gray-800/80 focus:border-blue-500/50
                                focus:placeholder-gray-400
                                transition-all duration-300 ease-out"
                        />
                        <Search
                            className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5
                                text-gray-500 group-hover:text-gray-400
                                transition-all duration-300
                                ${isFocused ? 'text-blue-400' : ''}
                                ${isFocused ? 'animate-pulse' : ''}`}
                        />
                        <div
                            className={`absolute inset-0 -z-10 rounded-lg
                                bg-blue-500/10 opacity-0 blur-xl
                                group-hover:opacity-100
                                transition-all duration-300
                                ${isFocused ? 'opacity-100 scale-105' : ''}`}
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 rounded-lg
                            text-gray-300 hover:text-white
                            bg-gray-800/50 hover:bg-gray-800/80
                            border border-gray-700/50 hover:border-blue-500/50
                            transition-all duration-300 ease-out">
                            Login
                        </button>
                        <button className="px-4 py-2 rounded-lg
                            text-white
                            bg-blue-600 hover:bg-blue-500
                            border border-blue-500/50
                            transition-all duration-300 ease-out">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;