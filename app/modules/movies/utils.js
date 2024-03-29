export const NAME = 'movies';

//Redux Action Types
export const DATA_AVAILABLE = `${NAME}/DATA_AVAILABLE`;

//API URL
export const API_KEY = '?api_key=[YOUR_API_KEY]';
export const API_PARAMS = '&page=1&append_to_response=videos,images';
export const API_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'http://image.tmdb.org/t/p/original';

//API End Points
export const POPULAR = `${API_URL}/movie/popular${API_KEY}`;
export const TOP_RATED = `${API_URL}/movie/top_rated${API_KEY}`;
export const NOW_PLAYING = `${API_URL}/movie/now_playing${API_KEY}`;
export const UPCOMING = `${API_URL}/movie/upcoming${API_KEY}`;
export const DISCOVER = `${API_URL}/discover/movie${API_KEY}`;
export const SEARCH = `${API_URL}/search/movie${API_KEY}`;

export const MOVIE_DETAILS = `${API_URL}/movie/`;
export const CREDITS = `/credits${API_KEY}${API_PARAMS}`;
export const SIMILAR = `/similar${API_KEY}${API_PARAMS}`;

//GENRES
export const GENRES = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
];