////////////////////////////////
///   10 de junio, 2022    /////
////////////////////////////////

// 2 de agosto, 2022
// Book object
// 6 de agosto, 2022

// Book Object
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

// Book Array
let myLibrary = [];
let bookCounter = 0;

// Display div
const tableContainer = document.querySelector(".table-container");

// Add Button
const btnAdd = document.querySelector(".btn-add");
const clearBtn = document.querySelector(".btn-clear");
const submitBtn = document.querySelector(".submit-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".fa-xmark");

// Table Headgings ---
const titleNames = ["Title", "Author", "Pages", "Read", "Edit"];

// Create table
const table = document.createElement("table");

// Form Select
const form = document.querySelector(".book-information-form");

// Book Select
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookCompleted = document.querySelector("#completed");

form.addEventListener("submit", addBookToLibrary);

// load headings
loadHeadings(titleNames);

// ------------------------------------------------ //
// FUNCTIONS
// Add to Library
function addBookToLibrary(e) {
  e.preventDefault();
  addToLocalStorage();
}

// Load table headings
function loadHeadings(titleArray) {
  const tr = document.createElement("tr");
  titleArray.forEach(item => {
    const th = document.createElement("th");
    th.classList.add("center-text");
    th.textContent = `${item}`;
    tr.appendChild(th);
    table.appendChild(tr);
    tableContainer.appendChild(table);
  });
}

// *** Retrieve Library from localStorage **** //
myLibrary = JSON.parse(localStorage.getItem("myLibrary"));

// console.log(myLibrary);
function displayOnPage(oldLibrary) {
  oldLibrary.forEach(item => {
    const tr = document.createElement("tr");
    tr.id = bookCounter++;
    tr.innerHTML = `
             <td>${item.title}</td>
             <td>${item.author}</td>
             <td class="center-text">${item.pages}</td>
             <td class="center-text">${item.read}</td>`;
    table.appendChild(tr);

    // Buttons ///
    const editBtn = document.createElement("button");
    editBtn.textContent = "EDIT";
    editBtn.classList.add("btn-edit");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DEL";
    deleteBtn.classList.add("btn-delete");

    //////
    const tdBtn = document.createElement("td");
    tdBtn.classList.add("tdButtons");
    tdBtn.appendChild(editBtn);
    tr.appendChild(tdBtn);
    table.appendChild(tr);

    /////
    tdBtn.appendChild(deleteBtn);
    tr.appendChild(tdBtn);
    table.appendChild(tr);

    // Dynamic buttons
    deleteBtn.addEventListener("click", e => {
      const row = e.currentTarget;
      const lostrow = e.currentTarget.parentElement.parentElement;

      if (row.classList.contains("btn-delete")) {
        e.currentTarget.parentElement.parentElement.remove();
      }

      // deleteItemFromLocalStorage(lostrow.id);
      // Delete from localStorage
      let items = getItemsFromLocalStorage();
      items.filter((item, index) => {
        let newIndex = index + 1;
        if (newIndex == lostrow.id) {
          console.log(`${newIndex} matches ${lostrow.id}`);
          items.splice(newIndex, 1);
        } else if (index == 0) {
          items.splice(index, 1);
        }
      });
      localStorage.setItem("myLibrary", JSON.stringify(items));
      console.log(items);
    });
    //
    editBtn.addEventListener("click", e => {
      console.log("Edit pressed!");
    });
  });
}

// Display table
// displayOnPage(myLibrary);
// ------------------------------------------------ //
// Buttons ---------------- //
btnAdd.addEventListener("click", () => {
  modal.classList.add("modal-show");
  clearItems();
});

// Reload to add a new entry
submitBtn.addEventListener("click", () => {
  if (
    bookTitle.value === "" ||
    bookAuthor.value === "" ||
    bookPages.value === "" ||
    bookCompleted.value === ""
  ) {
    alert("You must fill all fields!");
    return;
  } else {
    location.reload();
  }
});

// Close Modal
closeModal.addEventListener("click", () => {
  modal.classList.add("modal-close");
  location.reload();
});

// const id = new Date().getTime().toString();
function addToLocalStorage() {
  // e.preventDefault();
  let newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookCompleted.value
  );
  let myLibrary = localStorage.getItem("myLibrary")
    ? JSON.parse(localStorage.getItem("myLibrary"))
    : [];
  myLibrary.push(newBook);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  return myLibrary;
}

// Display Library on page load
window.addEventListener("DOMContentLoaded", displayOnPage(myLibrary));

const clearItems = () => {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookCompleted.value = "";
};

//
function getItemsFromLocalStorage() {
  return localStorage.getItem("myLibrary")
    ? JSON.parse(localStorage.getItem("myLibrary"))
    : [];
}

function deleteItemFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(item => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("myLibrary", JSON.stringify(items));
}

// clearBtn.addEventListener("click", () => {
//   localStorage.removeItem("myLibrary");
//   location.reload();
// });
