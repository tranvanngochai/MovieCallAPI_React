const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "c57c013fb14830f2b5f381096caac07e",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
