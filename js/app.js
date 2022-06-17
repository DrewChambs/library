////////////////////////////////
///   10 de abril, 2022    /////
////////////////////////////////

// Display
const tableContainer = document.querySelector(".table-container");

// Book object
function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read),
    (this.info = function () {
      return `<p>"${this.title}",  by ${this.author} has ${
        this.pages
      } pages and I've ${
        read ? "read this book" : "not read this book."
      }</p><br>`;
    });
}

// Array to hold library books
let myLibrary = [];

// Function to add to Library
function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  return myLibrary;
}

const mybook = new Book("When the wind blows", "Ben Jamin", 235, true);

const mybook2 = new Book(
  "Call All the People in Town",
  "James Rooland-Kent",
  433,
  true
);
const mybook3 = new Book(
  "Silly Games for the Masses",
  "Jonathon Miles",
  245,
  false
);
const mybook4 = new Book("Find a Way", "Gooly Gim", 1235, true);

addBookToLibrary(mybook);
addBookToLibrary(mybook2);
addBookToLibrary(mybook3);
addBookToLibrary(mybook4);
console.log(myLibrary);

// FUNCTIONS //
const pageLibraryDisplay = book_libray => {
  let newBookLibrary = book_libray.map(item => {
    return `<table>
            <tr>
              <th class="book-title-heading">Book Title</th>
              <td class="book-title">
                ${item.title}
              </td>
            </tr>
            <tr>
              <th>Author</th>
              <td>${item.author}</td>
            </tr>
            <tr>
              <th>Pages</th>
              <td>${item.pages}</td>
            </tr>
            <tr>
              <th>Completed</th>
              <td class="read-book">${item.read ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th class="change-details">Change Details:</th>
              <td>
                <div class="btn-holder">
                  <button class="read-btn">Read Book</button>
                  <button class="delete-btn">Delete Book</button>
                </div>
              </td>
            </tr>
          </table>`;
  });
  tableContainer.innerHTML = newBookLibrary;
};

// Display on Page
pageLibraryDisplay(myLibrary);

// Function to change book "read" status
function readStatus() {}

// Buttons SELECT
const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".delete-btn");
const readBtn = document.querySelector(".read-btn");

// Events
deleteBtn.addEventListener("click", () => {
  console.log("Delete button!");
});
addBtn.addEventListener("click", () => {
  console.log("Add Suppen yo!");
});
readBtn.addEventListener("click", () => {
  console.log("Read this book!");
  document.querySelector(".read-book").textContent = "Yes";
});
