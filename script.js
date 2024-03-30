// Load books dynamically based on category filter
document.addEventListener('DOMContentLoaded', function () {
    const categoryFilter = document.getElementById('category-filter');
    const bookList = document.querySelector('.book-list');

    categoryFilter.addEventListener('change', function () {
        const selectedCategory = categoryFilter.value;
        fetchBooks(selectedCategory);
    });

    function fetchBooks(category) {
        // This is just a mock implementation. You can replace it with actual data retrieval.
        const books = [
            { title: 'Book 1', category: 'fiction', author: 'Author 1' },
            { title: 'Book 2', category: 'non-fiction', author: 'Author 2' },
            { title: 'Book 3', category: 'fiction', author: 'Author 3' },
            // Add more books as needed
        ];

        renderBooks(books.filter(book => category === 'all' || book.category === category));
    }

    function renderBooks(books) {
        bookList.innerHTML = '';
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book');
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>Category: ${book.category}</p>
                <p>Author: ${book.author}</p>
            `;
            bookList.appendChild(bookItem);
        });
    }

    // Initial fetch to load all books
    fetchBooks('all');
});