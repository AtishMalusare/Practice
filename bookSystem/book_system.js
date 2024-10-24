// Array to store books
let books = [];

// Function to add a new book
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    // Validate input fields
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        books.push(book); // Add book to the array
        showBooks(); // Display the updated book list
        clearInputs(); // Clear the input fields
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// Function to display all books
function showBooks() {
    const booksDiv = books.map((book, index) => `
        <div class="book-entry">
            <h3>Book Number: ${index + 1}</h3>
            <p><strong>Book Name:</strong> ${book.name}</p>
            <p><strong>Author Name:</strong> ${book.authorName}</p>
            <p><strong>Description:</strong> ${book.bookDescription}</p>
            <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
            <button onclick="deleteBook(${index})">Delete</button>
        </div>
    `);

    document.getElementById('books').innerHTML = booksDiv.join('');
}

// Function to clear input fields
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

// Function to delete a book by index
function deleteBook(index) {
    books.splice(index, 1); // Remove the book from the array
    showBooks(); // Update the displayed list
}
