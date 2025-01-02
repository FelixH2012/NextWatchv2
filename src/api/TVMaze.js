const BASE_URL = 'https://api.tvmaze.com';

/**
 * Search shows
 * @param query {string}
 * @returns {Promise<any>}
 */
export async function searchShows(query) {
    const response = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`);
    return response.json();
}

/**
 * Get popular shows
 * @returns {Promise<any>}
 */
export async function getPopularShows() {
    const response = await fetch(`${BASE_URL}/shows`);
    return response.json();
}
