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
                <td>${currentBook.is_read}</td>
                <td></td>
            </tr>
        `);
    };
}

window.onload = showBooks();

// Book contructor
function Book(title, author, pages, is_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.is_read = is_read;
}

// display new object to table
function appendBook() {
    let table = document.getElementsByClassName('book-table')[0];
    let currentBook = myLibrary[myLibrary.length-1]
    table.innerHTML += (`
        <tr>
            <td>${currentBook.title}</td>
            <td>${currentBook.author}</td>
            <td>${currentBook.pages}</td>
            <td>${currentBook.is_read}</td>
            <td></td>
        </tr>
    `);
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