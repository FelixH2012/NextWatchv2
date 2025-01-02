export function createFeaturedBanner(series) {
    if (!series) return null;

    const banner = document.createElement('div');
    banner.className = 'relative h-[80vh] w-full';

    banner.innerHTML = `
    <div class="absolute inset-0">
      <img
        src="${series.image?.medium || 'https://via.placeholder.com/1920x1080'}"
        alt="${series.name}"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
    </div>

    <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <h1 class="text-4xl md:text-6xl font-bold text-white max-w-2xl">
        ${series.name}
      </h1>
      
      <p class="mt-4 text-lg text-gray-300 max-w-xl line-clamp-3">
        ${series.summary ? series.summary.replace(/<[^>]+>/g, '') : ''}
      </p>

      <div class="flex gap-4 mt-8">
        <button class="flex items-center px-6 py-2 bg-white text-black rounded hover:bg-white/90">
          <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          Play
        </button>
        <button class="flex items-center px-6 py-2 border border-white text-white rounded hover:bg-white/10">
          <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          More Info
        </button>
      </div>
    </div>
  `;

    return banner;
}