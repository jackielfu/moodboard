const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
const Schema = mongoose.Schema;

db.on('error', function() {
  console.log('ERROR: Mongoose connection error!');
});

db.once('open', function() {
  console.log('SUCCESS: Mongoose connected successfully!');
});

/************ HELPER FUNCTIONS *************/

const boardSchema = new Schema({
  title: String,
  images: [ { path: String } ],
  userId: String
});

let Board = mongoose.model('Board', boardSchema);

let saveBoard = (board) => {
  new Board ({
    id: board.id,
    title: board.title,
    images: board.images
  })
  .save()
  .then( () => {
    console.log(board.name, 'was saved to the database.')
  });
}