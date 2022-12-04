let myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  if (this.read) {
    return `${this.title} by ${this.author}, ${this.pages}, already read.`;
  } else {
    return `${this.title} by ${this.author}, ${this.pages}, not read yet.`;
  }
};

function addBookToLibrary() {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector('input[type="checkbox"]');

  if (title.value.length === 0) {
    title.value = "lmao";
  }

  if (author.value.length === 0) {
    author.value = "lmao";
  }

  if (pages.value.length === 0) {
    pages.value = "1488";
  }
  const book = new Book(title.value, author.value, pages.value, read.checked);
  // add a check to see if the book is already added
  let isAdded = false;
  for (let i = 0; i < myLibrary.length; i++) {
    if (book.title === myLibrary[i].title) {
      isAdded = true;
      alert("Book is already exists!");
      break;
    }
  }
  if (!isAdded) {
    myLibrary.push(book);
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
  }
}

function displayBooks() {
  // first remove every book from the display
  const booksGrid = document.querySelector(".books-grid");

  while (booksGrid.lastChild) {
    booksGrid.removeChild(booksGrid.lastChild);
  }

  //then render the whole myLibrary again

  for (let i = 0; i < myLibrary.length; i++) {
    const singleBook = document.createElement("div");
    singleBook.setAttribute("class", "single-book");

    const divTitle = document.createElement("div");
    divTitle.classList.add("title");
    divTitle.textContent = myLibrary[i].title;

    const divAuthor = document.createElement("div");
    divAuthor.classList.add("author");
    divAuthor.textContent = myLibrary[i].author;

    const divPages = document.createElement("div");
    divPages.classList.add("pages");
    divPages.textContent = myLibrary[i].pages;

    const btnRead = document.createElement("button");
    if (myLibrary[i].read) {
      btnRead.classList.add("read");
      btnRead.textContent = "READ";
    } else {
      btnRead.classList.add("not-read");
      btnRead.textContent = "NOT READ";
    }

    const btnRemove = document.createElement("button");
    btnRemove.classList.add("remove");
    btnRemove.textContent = "DELETE";

    singleBook.appendChild(divTitle);
    singleBook.appendChild(divAuthor);
    singleBook.appendChild(divPages);
    singleBook.appendChild(btnRead);
    singleBook.appendChild(btnRemove);
    booksGrid.appendChild(singleBook);
  }
}

function test() {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector('input[type="checkbox"]');

  const book = new Book(title.value, author.value, pages.value, read.checked);

  console.log(book.info());
  myLibrary.push(book);
  console.log(myLibrary);
}


// POINT 4
// ADD NEW BOOK BUTTON - OPENING THE MODAL

const addBookButton = document.querySelector(".add-book");
const modal = document.querySelector(".modal");

addBookButton.addEventListener("click", function () {
  modal.classList.add("visible");
  modal.classList.remove("not-visible");
});

// CLOSE THE MODAL IF THE FORM IS NOT CLICKED

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.replace("visible", "not-visible");
  }
});


addBookToLibrary();
displayBooks();
