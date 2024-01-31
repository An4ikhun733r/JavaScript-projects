const myLibrary = [];
const bookContainer = document.getElementById("bookContainer");
const but = document.getElementById("butt1");


but.addEventListener('click', () => addBookToLibrary());
renderLibrary();

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary() {
    let name = prompt("What's the name of the book? ");
    let author = prompt("Who's the author? ");
    let pages = prompt("How many pages in the book? ");
    let read = prompt("Have you read this book? ");
    const book = new Book(name, author, pages, read);
    myLibrary.push(book);
    renderLibrary();
}

function renderLibrary(){
    bookContainer.innerHTML = "";
    
    myLibrary.forEach((book,index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        const bookInfo = document.createElement("p");
        bookInfo.textContent = book.info();
        bookDiv.appendChild(bookInfo);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeBook(index));
        bookDiv.appendChild(removeButton);

        const readButton = document.createElement("button");
        readButton.textContent = "Read";
        readButton.addEventListener("click", () => changeRead(index));
        bookDiv.appendChild(readButton);

        bookContainer.appendChild(bookDiv);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    renderLibrary();
}

function changeRead(index) {
    if (myLibrary[index].read != "yes")
    {
        myLibrary[index].read = "yes"
    }
    else{
        myLibrary[index].read = "no"
    }
    renderLibrary()
}