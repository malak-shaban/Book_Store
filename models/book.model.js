const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true  //remove space (f,e)
  },
  author: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true });  //createdAt , updatedAt

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;