// ***** 21 de junio, 2022 ************* //

const submitBtn = document.querySelector(".submit-btn");
const tableContainer = document.querySelector(".table-container");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".fa-xmark");

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

// Book Array
let myLibrary = [];

form.addEventListener("submit", addBookToLibrary);

// Add Function
function addBookToLibrary(e) {
  e.preventDefault();

  // Check for empty input
  if (!bookTitle || !bookAuthor || !bookPages || !bookCompleted) return;

  let newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookCompleted.value
  );
  // localStorage.setItem("newBook", JSON.stringify(newBook));
  myLibrary.push(newBook);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  console.log(myLibrary);
  clearFormValues();
  return myLibrary;
}

// *** Retrieve Library from localStorage **** //
myLibrary = JSON.parse(localStorage.getItem("myLibrary"));

// Display Library on Page
const displayOnPage = oldLibrary => {
  oldLibrary.forEach(item => {
    const table_element = document.createElement("table");
    table_element.setAttribute("class", "table-styles");
    table_element.innerHTML = `<tr>
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
               <td class="read-book">${item.read}</td>
             </tr>
             <tr>
               <th class="change-details">Change Details:</th>
               <td>
                 <div class="btn-holder">
                   <button class="read-btn">Read Book</button>
                   <button class="delete-btn">Delete Book</button>
                 </div>
               </td>
             </tr>`;
    tableContainer.appendChild(table_element);

    // Event Listeners
    const deleteBtn = table_element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", e => {
      console.log("Contact!");
    });
    const readBtn = table_element.querySelector(".read-btn");
    readBtn.addEventListener("click", () => {
      console.log("Read Button!");
    });
  });
};

// Display
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

// Add Btn SELECT & Event
const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", () => {
  console.log("Add Suppen!");
  modal.classList.add("modal-show");
});

// Close Modal
closeModal.addEventListener("click", () => {
  modal.classList.add("modal-close");
  location.reload();
});

const clearLocalStorage = () => {
  localStorage.clear();
};

// Reload to add new entry
submitBtn.addEventListener("click", () => {
  location.reload();
});

const deleteBook = e => {
  console.log(e.currentTarget);
};
