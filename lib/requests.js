const TOKEN = process.env.TMDB_API_KEY;
const BASE_URL = process.env.BASE_URL;
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
    },
};

export const getTrendingMovies = async (page) => {
    try {
        const res = await fetch(
            `${BASE_URL}/trending/movie/day?language=en-US&page=${page}&order=popularity`,
            options
        );
        const data = await res.json();

        return data.results;
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

export const getMovieDetails = async (id) => {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            options
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

export const getSimilarMovies = async (id) => {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
            options
        );
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error("Fetch error:", error);
    }
};
export const searchMovie = async (query) => {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}`,
            options
        );
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error("Fetch error:", error);
    }
};
