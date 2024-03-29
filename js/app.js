////////////////////////////////
///   10 de junio, 2022    /////
////////////////////////////////
// 2 de agosto, 2022
// 6 de agosto, 2022 update
// Sábado, 20 de agosto, 2022 //
////////////////////////////////
///   5 de septiembre, 2022    /////
////////////////////////////////

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

// Form
const libraryForm = document.getElementById("forms");
//
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("book-read");

// Table Container
const tableContainer = document.querySelector(".table-container");
// Table Headings Array ---
const tableHeaders = ["Title", "Author", "Pages", "Read", "Options"];
// Event Buttons
const submitBtn = document.querySelector(".btn-submit");
const addBtn = document.querySelector(".btn-add");
const clearBtn = document.querySelector(".btn-clear");
const closeModal = document.querySelector(".fa-xmark");
// Form modal
const modal = document.querySelector(".modal");

// Get local storage items
const items = getItemsFromStorage();

// Create table/add attributes
const table = document.createElement("table");
table.setAttribute("role", "presentation");
table.classList.add("layout", "display", "responsive-table");

// Call form
libraryForm.addEventListener("submit", addBookToLibrary);

// Load table headings
loadTableHeadings(tableHeaders);

// *** Retrieve Library from localStorage **** //
sepLibrary = JSON.parse(localStorage.getItem("sepLibrary"));

// FUNCTIONS
function addBookToLibrary(e) {
  e.preventDefault();

  let newBook = new Book(title.value, author.value, pages.value, read.value);

  // Check for negative numbers
  if (pages.value < 0) {
    console.log("no less!");
    alert("You must enter a number greater than 0");
    resetAllForm();
    return;
  }
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
  // Reset form after book entry submit
  resetAllForm();
}
function loadTableHeadings(tableHeaders) {
  const tr = document.createElement("tr");
  tr.classList.add("table-header-row");
  const thead = document.createElement("thead");
  tableHeaders.forEach(item => {
    const th = document.createElement("th");
    th.textContent = `${item}`;
    tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);
    tableContainer.appendChild(table);
  });
}
function createBookData(libraryArray) {
  const tbody = document.createElement("tbody");
  libraryArray.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.id = index;
    tr.classList.add("table-data");
    tr.innerHTML = `<td class="book_data display-title">${item.title}</td>
              <td class="book_data display-author">${item.author}</td>
              <td class="book_data  display-pages text-center">${item.pages}</td>
              <td class="text-center read-status display-read">${item.read}</td>
              `;

    //// Buttons ////
    // Read
    const readButton = document.createElement("button");
    readButton.classList.add("btn-read");
    readButton.textContent = `${item.read === "Yes" ? "No" : "Yes"}`;
    // Edit
    const editBtn = document.createElement("button");
    editBtn.textContent = "EDIT";
    editBtn.classList.add("btn-edit");
    // Delete
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DEL";
    deleteButton.classList.add("btn-delete");

    // Table Data element
    const tdBtn = document.createElement("td");
    // Add Buttons
    tdBtn.classList.add("td-buttons");
    tdBtn.appendChild(readButton);
    tr.appendChild(tdBtn);
    table.appendChild(tr);

    /////
    tdBtn.appendChild(editBtn);
    tr.appendChild(tdBtn);
    table.appendChild(tr);

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

      let theLast = getItemsFromStorage();
      theLast.forEach((item, index) => {
        if (tr.id == index) {
          theLast.splice(index, 1);
        }
      });
      localStorage.setItem("sepLibrary", JSON.stringify(theLast));
    });

    //
    editBtn.addEventListener("click", e => {
      alert("Edit disabled!");
    });

    readButton.addEventListener("click", e => {
      // Read/Completed Display
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
function resetAllForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";
  title.focus();
}
// Clear all fields function
// const clearItems = () => {
//   title.value = "";
//   author.value = "";
//   pages.value = "";
//   pages.value = "";
// };

//// Events ////
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
addBtn.addEventListener("click", () => {
  modal.classList.add("modal-show");

  title.focus();
});
// Close Modal
closeModal.addEventListener("click", () => {
  modal.classList.add("modal-close");

  // Clear and reset form
  resetAllForm();
  location.reload();
});
// Clear All Items
// clearBtn.addEventListener("click", () => {
//   alert("Clear All button disbled!");
// });

// Load library display on page load
window.addEventListener("DOMContentLoaded", createBookData(sepLibrary));
