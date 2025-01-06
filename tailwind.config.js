export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        animation: {
            'spin-slow': 'spin 3s linear infinite',
        },
        colors: {
            'gray-950': '#1a1a1a',
            'gray-900': '#212121',
            'gray-800': '#424242',
            'gray-700': '#616161',
            'gray-600': '#757575',
            'gray-500': '#9e9e9e',
            'gray-400': '#bdbdbd',
            'gray-300': '#e0e0e0',
            'gray-200': '#eeeeee',
            'gray-100': '#f5f5f5',
            'gray-50': '#fafafa',
        },
    },
  },
  plugins: [],
}

