const API_KEY = "41a612e50aa72e936780f2c959b4b964";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const getApiMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/movie/${query}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}

// New functions for more categories
export const getTrendingMovies = async (page = 1) => {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();
    return {
        results: data.results,
        totalPages: data.total_pages,
    };
};

export const getTopRatedMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const getUpcomingMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const getPopularTV = async () => {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const getTrendingTV = async () => {
    const response = await fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const getTopRatedTV = async () => {
    const response = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const getTrendingTVShows = async (page = 1) => {
    const response = await fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();
    return {
        results: data.results,
        totalPages: data.total_pages,
    };
};

export const getImageUrl = {
  backdrop: (path) => path ? `https://image.tmdb.org/t/p/original${path}` : '/fallback.jpg',
  poster: (path) => path ? `https://image.tmdb.org/t/p/w500${path}` : '/fallback.jpg',
};

