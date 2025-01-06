/**
 * @param classes
 * @returns {string}
 */
export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

/**
 * Quick and dirty function to truncate a string to 120 characters
 * @param text {string}
 * @returns {string|*}
 */
export function truncateSummary(text) {
    const cleanText = text.replace(/<[^>]+>/g, '');
    return cleanText.length > 120 ? `${cleanText.slice(0, 120)}...` : cleanText;
}