let books = [
  { id: 1, title: "Clean Code" },
  { id: 2, title: "Node.js Design Patterns" }
];

// get all books
function getAllBooks() {
  return books;
}

// get book by id
function getBookById(id) {
  return books.find((b) => b.id === Number(id));
}

// add new book
function addBook(title) {
  const newBook = {
    id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
    title
  };
  books.push(newBook);
  return newBook;
}

// update book
function updateBook(id, title) {
  const book = getBookById(id);
  if (book) {
    book.title = title;
    return book;
  }
  return null;
}

// delete book
function deleteBook(id) {
  const index = books.findIndex((b) => b.id === Number(id));
  if (index !== -1) {
    const deleted = books.splice(index, 1);
    return deleted[0];
  }
  return null;
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
};