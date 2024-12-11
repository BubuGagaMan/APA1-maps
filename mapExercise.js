const catalogue = new Map();

function addBook(bookId, title, author) {
  // TODO: Implement this function to add a book to the catalogue.
  catalogue.set(bookId, { title, author })
}

function findBook(bookId) {
  // TODO: Implement this function to find a book by its ID.
  // for( const [key] of catalogue){
  //   if(key === bookId) {
  //     return catalogue.get(bookId)
  //   }
  // }
  return catalogue.has(bookId) ? catalogue.get(bookId)
    : "Book ID not found"
}

function removeBook(bookId) {
  // TODO: Implement this function to remove a book from the catalogue.
  
  return catalogue.delete(bookId) ? console.log(`Book ${bookId} deleted`)
    : console.log(`Book ${bookId} not found.`)
}

function listAllBooks() {
  // TODO: Implement this function to list all books in the catalogue.
  for(const [key, value] of catalogue) {
    console.log(`Book ID: ${key}; Title: ${value.title}, Author: ${value.author}`)
  }
}

function numberOfBooks() {
  // TODO: Implement this function to return the number of books in the catalogue.
  return catalogue.size
}

// Test the functions
addBook("12345", "The Lord of the Rings", "J.R.R. Tolkien");
addBook("67890", "Pride and Prejudice", "Jane Austen"); 

console.log(findBook("12345")); // Should output the book object
removeBook("12345");
listAllBooks(); // Should list the remaining book(s)
console.log(numberOfBooks()); // Should output the correct count