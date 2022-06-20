// ***** 10 de abril, 2022 ************* //

const submitBtn = document.querySelector(".submit-btn");
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

// Form Select
const form = document.querySelector(".book-information-form");

// Book Select
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookCompleted = document.querySelector("#completed");

let myLibrary = [];
// let newBook = JSON.parse(localStorage.getItem("newBook"));

form.addEventListener("submit", addBookToLibrary);

// Add Function
function addBookToLibrary(e) {
  e.preventDefault();

  let newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookCompleted.value
  );
  // localStorage.setItem("newBook", JSON.stringify(newBook));
  myLibrary.push(newBook);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  clearFormValues();
  console.log(myLibrary);
  return myLibrary;
}

// *** Retrieve Library from localStorage **** //
myLibrary = JSON.parse(localStorage.getItem("myLibrary"));

// Display Library on Page
const displayOnPage = myLibrary => {
  let myLastLibrary = myLibrary.map(item => {
    return `<table>
  <tr>
    <th class="book-title-heading">Book Title</th>
    <td class="book-title">${item.title}</td>
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
  tableContainer.innerHTML = myLastLibrary;

  // **************************************** //
  const deleteBtn = document.querySelector(".delete-btn");
  const readBtn = document.querySelector(".read-btn");
  deleteBtn.addEventListener("click", () => {
    console.log("Delete button!");
  });
  readBtn.addEventListener("click", () => {
    console.log("Read this book!");
    document.querySelector(".read-book").textContent = "Yes";
  });
};

// Call Display
displayOnPage(myLibrary);

// Clear Form
const clearFormValues = () => {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookCompleted.value = false;
};

// Reset form
const formReset = () => {
  form.reset();
};

// Buttons SELECT
const addBtn = document.querySelector(".add-btn");

// Events
addBtn.addEventListener("click", () => {
  console.log("Add Suppen!");
});
