////////////////////////////////
///   10 de abril, 2022    /////
////////////////////////////////

// Display div
const showBooks = document.querySelector(".display-books");

let myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = false);
  this.info = function () {
    console.log(
      `The book, ${this.title}, by ${this.author} has ${
        this.pages
      } pages and I've ${read ? "read this book" : "not read this book."} `
    );
  };
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);

  let displayBook = myLibrary.map(item => {
    return `<p>The book "${item.title}." is written by ${item.author}.</p>
    <p>This book has ${item.pages} pages and I have not read it</p>`;
  });
  console.log(displayBook);
  showBooks.innerHTML = displayBook;
}
const mybook = new Book("When the wind blows", "Ben Jamin", 235, true);
const mybook2 = new Book("Find a Way", "Gooly Gim", 1235, false);

// console.log(addBookToLibrary(mybook));

addBookToLibrary(mybook);
addBookToLibrary(mybook2);
