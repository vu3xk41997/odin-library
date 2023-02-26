let myLibrary = [
    {
       "title":"The Great Gatsby",
       "author":"F. Scott Fitzgerald",
       "pages":218,
       "is_read":"Read"
    },
    {
       "title":"To Kill a Mockingbird",
       "author":"Harper Lee",
       "pages":281,
       "is_read":"Read"
    },
    {
       "title":"Nineteen Eighty-Four",
       "author":"George Orwell",
       "pages":328,
       "is_read":"Not read"
    },
    {
       "title":"One Hundred Years of Solitude",
       "author":"Gabriel García Márquez",
       "pages":417,
       "is_read":"Not read"
    }
]

// add book popup form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myForm")) {
        document.getElementById("myForm").style.display = "none";
    }
  }

// display books in table
function showBooks() {
    let table = document.getElementsByClassName('book-table')[0];
    for (let i = 0; i < myLibrary.length; i++) {
        let currentBook = myLibrary[i]
        table.innerHTML += (`
            <tr>
                <td>${currentBook.title}</td>
                <td>${currentBook.author}</td>
                <td>${currentBook.pages}</td>
                <td><button class="status-button" id="status${i}" onclick="changeStatus(${i})">${currentBook.is_read}</button></td>
                <td><button class="delete-button" id="delete${i}" onclick="deleteBook(${i})">Delete</button></td>
            </tr>
        `);
    };
}

window.onload = showBooks();

// Book contructor
class Book{
    constructor(title, author, pages, is_read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.is_read = is_read;
    }
}
// function Book(title, author, pages, is_read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.is_read = is_read;
// }

// display new object to table
function appendBook() {
    let table = document.getElementsByClassName('book-table')[0];
    let currentBook = myLibrary[myLibrary.length-1]
    table.innerHTML += (`
        <tr>
            <td>${currentBook.title}</td>
            <td>${currentBook.author}</td>
            <td>${currentBook.pages}</td>
            <td><button class="status-button" id="status${myLibrary.length-1}" onclick="changeStatus(${myLibrary.length-1})">${currentBook.is_read}</button></td>
            <td><button class="delete-button" id="delete${myLibrary.length-1}" onclick="deleteBook(${myLibrary.length-1})">Delete</button></td>
        </tr>
    `);
}

// button for delete certain book
function deleteBook(bookIndex) {
    myLibrary.splice(bookIndex, 1);
    document.getElementById(`delete${bookIndex}`).parentElement.parentElement.remove();
}

// button for change read status
function changeStatus(bookIndex) {
    if (myLibrary[bookIndex].is_read == "Not read") {
        myLibrary[bookIndex].is_read = "Read"
    } else {
        myLibrary[bookIndex].is_read = "Not read"
    }
    document.getElementById(`status${bookIndex}`).innerText = myLibrary[bookIndex].is_read
}

// clear form after new book object is created
function clearForm() {
    document.getElementById('form-title').value = "";
    document.getElementById('form-author').value = "";
    document.getElementById('form-pages').value = "";
}

// create new object from form
function addBookToLibrary() {
    title = document.getElementById('form-title').value;
    author = document.getElementById('form-author').value;
    pages = document.getElementById('form-pages').value;
    is_read = document.getElementById('form-is_read').value;

    new_book = new Book(title, author, pages, is_read);
    myLibrary.push(new_book)
    appendBook();
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    clearForm();
    closeForm();
})