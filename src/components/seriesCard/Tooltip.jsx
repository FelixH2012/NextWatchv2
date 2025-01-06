import React, { useState } from 'react';

export function Tooltip({ children, content, position = 'top' }) {
    const [isVisible, setIsVisible] = useState(false);

    const positions = {
        top: 'bottom-full mb-2',
        bottom: 'top-full mt-2',
        left: 'right-full mr-2',
        right: 'left-full ml-2'
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {isVisible && (
                <div className={`
          absolute ${positions[position]} left-1/2 -translate-x-1/2
          px-2 py-1 text-xs text-white bg-gray-900 rounded-md
          whitespace-nowrap z-50
          animate-in fade-in duration-200
        `}>
                    {content}
                    <div className="absolute left-1/2 -translate-x-1/2 border-4 border-transparent
            border-t-gray-900 bottom-[-8px]" />
                </div>
            )}
            {children}
        </div>
    );
}