const mongoConnection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const getAll = async () => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection.find({}).toArray();
  // console.log("🚀 ~ file: movieModel.js ~ line 20 ~ getAll ~ movies", movies)

  return movies;
}

module.exports = {
  create,
  getAll,
};
