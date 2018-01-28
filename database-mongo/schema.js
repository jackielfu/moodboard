var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  boards: Array
});

var boardSchema = mongoose.Schema({
  title: String,
  images: Array,
  userId: String
});

var imageSchema = mongoose.Schema({
  path: String,
  userId: String,
  boardId: String
});

var User = mongoose.model('User', userSchema);
var Board = mongoose.model('Board', boardSchema);
var Image = mongoose.model('Image', imageSchema);

module.exports = {'User': User, 'Board': Board, 'Image': Image};