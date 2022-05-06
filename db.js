module.exports = function () {
  return {
    genres: require("./_data/genres.json"),
    movies: require("./_data/movies.json"),
    actors: require("./_data/actors.json"),
  };
};
