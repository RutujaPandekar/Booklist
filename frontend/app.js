// const API_URL = "http://localhost:5000/api/books";

// // Fetch Books
// async function fetchBooks() {
//   try {
//     const response = await axios.get(API_URL);
//     const books = response.data;
//     const bookList = document.getElementById("book-list");
//     bookList.innerHTML = books
//       .map(
//         (book) => `
//         <tr>
//           <td>${book.title}</td>
//           <td>${book.author}</td>
//           <td>${new Date(book.publishedDate).toLocaleDateString()}</td>
//         </tr>
//       `
//       )
//       .join("");
//   } catch (error) {
//     console.error("Error fetching books:", error);
//   }
// }

// // Add Book
// document.getElementById("book-form").addEventListener("submit", async (event) => {
//   event.preventDefault();
//   const title = document.getElementById("title").value;
//   const author = document.getElementById("author").value;
//   const publishedDate = document.getElementById("publishedDate").value;

//   try {
//     await axios.post(API_URL, { title, author, publishedDate });
//     fetchBooks();
//   } catch (error) {
//     console.error("Error adding book:", error);
//   }
// });

// // Initial Fetch
// fetchBooks();
const API_URL = "http://localhost:5000/api/books";

// Handle Form Submission
document.getElementById("bookForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, author, pages }),
  });

  if (response.ok) {
    alert("Book added successfully!");
    fetchBooks();
  } else {
    alert("Failed to add book");
  }
});

// Fetch and Display Books
async function fetchBooks() {
  const response = await fetch(API_URL);
  const books = await response.json();

  const booksList = document.getElementById("booksList");
  booksList.innerHTML = "";
  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author} - ${book.pages} pages`;
    booksList.appendChild(li);
  });
}

// Initial Fetch
fetchBooks();
