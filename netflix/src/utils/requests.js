const API_KEY = Process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: {
    title: "Trending Movies",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchNetflixOriginals: {
    title: "Netflix Originals",
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`
  },
  fetchActionMovies: {
    title: "Action Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchComedyMovies: {
    title: "Comedy Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
  },
  fetchHorrorMovies: {
    title: "Horror Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
  },
  fetchRomanceMovies: {
    title: "Romance Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
  },
  fetchDocumentaries: {
    title: "Documentaries",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`
  }
};

export default requests;
