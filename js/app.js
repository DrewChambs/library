////////////////////////////////
///   10 de junio, 2022    /////
////////////////////////////////
// 2 de agosto, 2022
// 6 de agosto, 2022 update
// Sábado, 20 de agosto, 2022 //
// Book Object
function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
  this.id = Math.round(Math.random() * 100000);
  this.info = function () {
    return `<p>"${this.title}",  by ${this.author} has ${
      this.pages
    } pages and I've ${
      read ? "read this book" : "not read this book."
    }</p><br>`;
  };
}
// New Book Array
let sepLibrary = [];
let newEditItems = [];

// Form
// const mainForm = document.getElementById("main-form");
const libraryForm = document.getElementById("forms");
//
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("book-read");

// Table Container
const tableContainer = document.querySelector(".table-container");
// Table Headgings ---
const tableHeaders = ["Title", "Author", "Pages", "Read", "Options"];
// Buttons
const submitBtn = document.querySelector(".btn-submit");
const addBtn = document.querySelector(".btn-add");
const sendBtn = document.querySelector(".btn-send");
const clearBtn = document.querySelector(".btn-clear");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".fa-xmark");
//
const editTitle = document.querySelector("#edit_title");
const editAuthor = document.querySelector("#edit_author");
const editPages = document.querySelector("#edit_pages");
const items = getItemsFromStorage();

// Create table
const table = document.createElement("table");
table.setAttribute("role", "presentation");
table.classList.add("main-table");

// const thead = document.createElement("thead");
// Call form
// mainForm.addEventListener("submit", addBookToLibrary);
libraryForm.addEventListener("submit", addBookToLibrary);
// Load table headings
loadHeadings(tableHeaders);

// *** Retrieve Library from localStorage **** //
sepLibrary = JSON.parse(localStorage.getItem("sepLibrary"));

// FUNCTIONS
function addBookToLibrary(e) {
  e.preventDefault();
  //
  let newBook = new Book(title.value, author.value, pages.value, read.value);

  // Check for empty fields
  if (
    title.value === "" ||
    author.value === "" ||
    pages.value === "" ||
    read.value === ""
  ) {
    title.focus();
    return;
  }
  // Add new book & load local storage
  addItemsInLocalStorage(newBook);
  resetAllForm();
}

function loadHeadings(tableHeaders) {
  const tr = document.createElement("tr");
  tr.classList.add("table-header-row");
  const thead = document.createElement("thead");
  tableHeaders.forEach(item => {
    const th = document.createElement("th");
    th.classList.add("table-header");
    // th.classList.add("text-left");
    th.textContent = `${item}`;
    tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);
    tableContainer.appendChild(table);
  });
}
//
function createBookData(libraryArray) {
  const tbody = document.createElement("tbody");
  libraryArray.forEach((item, index) => {
    const tr = document.createElement("tr");

    tr.id = index;
    tr.classList.add("table-data");
    tr.innerHTML = `<td class="book_data display-title" data-editName="title">${item.title}</td>
              <td class="book_data display-author" data-editName="author">${item.author}</td>
              <td class="book_data  display-pages text-center" data-editName="pages">${item.pages}</td>
              <td class="text-center read-status display-read">${item.read}</td>
              `;

    // tbody.appendChild(tr);
    // table.appendChild(tbody);

    // Buttons ///
    // Read
    const readButton = document.createElement("button");
    readButton.classList.add("btn-read");
    readButton.textContent = `${item.read === "Yes" ? "No" : "Yes"}`;
    // Edit
    // const editBtn = document.createElement("button");
    // editBtn.textContent = "EDIT";
    // editBtn.classList.add("btn-edit");
    // Delete
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DEL";
    deleteButton.classList.add("btn-delete");

    // Table Data element
    const tdBtn = document.createElement("td");
    // Add Buttons
    tdBtn.classList.add("table-buttons");
    tdBtn.appendChild(readButton);
    tr.appendChild(tdBtn);
    table.appendChild(tr);

    /////
    // tdBtn.appendChild(editBtn);
    // tr.appendChild(tdBtn);
    // table.appendChild(tr);

    /////
    tdBtn.appendChild(deleteButton);
    tr.appendChild(tdBtn);
    table.appendChild(tr);

    // Book Status Change
    const statusSelect = document.querySelector(".read-status");
    // Buttons
    const btnRead = document.querySelector(".btn-read");
    const btnDelete = document.querySelector(".btn-delete");
    //
    deleteButton.addEventListener("click", e => {
      let row = e.currentTarget.parentElement.parentElement;
      row.remove();
      console.log(row);

      let theLast = getItemsFromStorage();
      console.log("Before: ", theLast);

      theLast.forEach((item, index) => {
        if (tr.id == index) {
          theLast.splice(index, 1);
        }
      });
      console.log("After: ", theLast);
      localStorage.setItem("sepLibrary", JSON.stringify(theLast));
    });

    //
    // editBtn.addEventListener("click", e => {
    //   newEditItems = items.map(book_change => {
    //     if (book_change.id == item.id) {
    //       editTitle.value = book_change.title;
    //       editAuthor.value = book_change.author;
    //       editPages.value = book_change.pages;
    //       editTitle.focus();
    //     }
    //     return book_change;
    //   });
    //   console.log(newEditItems);
    //   editBtn.textContent = "Submit";
    // });

    readButton.addEventListener("click", e => {
      // // Read/Completed Display
      const yes_no = e.currentTarget.parentElement.previousElementSibling;

      // Check and change read/completed value
      if (yes_no.innerHTML === "No") {
        yes_no.innerHTML = "Yes";
        readButton.innerHTML = "No";
      } else {
        yes_no.innerHTML = "No";
        readButton.innerHTML = "Yes";
      }
      // Get localStorage
      let items = getItemsFromStorage();
      console.log(items);
      // Change book read/completed
      items = items.map(book => {
        if (book.id == item.id) {
          book.read = yes_no.textContent;
        }
        return book;
      });
      // Edit local storage to show changes
      localStorage.setItem("sepLibrary", JSON.stringify(items));
      location.reload();
    });
    tbody.appendChild(tr);
    table.appendChild(tbody);
  });
}
///////////////////////////
function addItemsInLocalStorage(nowBook) {
  let sepLibrary = localStorage.getItem("sepLibrary")
    ? JSON.parse(localStorage.getItem("sepLibrary"))
    : [];
  sepLibrary.push(nowBook);
  localStorage.setItem("sepLibrary", JSON.stringify(sepLibrary));
}
function getItemsFromStorage() {
  return localStorage.getItem("sepLibrary")
    ? JSON.parse(localStorage.getItem("sepLibrary"))
    : [];
}

// Update Storage
function updateLocalStorage(newArray) {
  let sepLibrary = localStorage.getItem("sepLibrary")
    ? JSON.parse(localStorage.getItem("sepLibrary"))
    : [];
  sepLibrary.push(nowBook);
  localStorage.setItem("sepLibrary", JSON.stringify(sepLibrary));
}
function resetAllForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";
  title.focus();
}
function resetChanges() {
  editTitle.value = "";
  editAuthor.value = "";
  editPages.value = "";
}
// ******************************* //

// Clear all fields function
// const clearItems = () => {
//   title.value = "";
//   author.value = "";
//   pages.value = "";
//   pages.value = "";
// };

// ------------------------ //
// Button Events //
addBtn.addEventListener("click", () => {
  modal.classList.add("modal-show");
  // clearItems();
  console.log("Add Sup!");
});

// Close Modal
closeModal.addEventListener("click", () => {
  modal.classList.add("modal-close");
  location.reload();
});

// Clear All Items
// clearBtn.addEventListener("click", () => {
//   alert("Clear All button disbled!");
// });

// Events
submitBtn.addEventListener("click", () => {
  if (
    title.value === "" ||
    author.value === "" ||
    pages.value === "" ||
    read.value === ""
  ) {
    alert("You must fill all fields!");
    return;
  }
  location.reload();
  title.focus();
});
// sendBtn.addEventListener("click", e => {
//   let theLastOne = newEditItems.filter(book_change => {
//     return book_change;
//   });
//   resetChanges();
//   console.log(theLastOne);
// });
// Load library display
window.addEventListener("DOMContentLoaded", createBookData(sepLibrary));

// setTimeout(() => {
//   console.log("Call of the Wild!");
// }, 5000);
