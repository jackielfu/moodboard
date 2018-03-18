const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  boards: Array // of boardIds
});

const boardSchema = new Schema({
  title: String,
  images: [ { path: String } ],
  userId: String
});

// const imageSchema = new Schema({
//   path: String,
//   userId: String,
//   boardId: String
// });

const User = mongoose.model('User', userSchema);
const Board = mongoose.model('Board', boardSchema);
// const Image = mongoose.model('Image', imageSchema);

module.exports = {
  User,
  Board,
  // Image
};