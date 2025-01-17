const API_URL = "http://localhost:5000/api/books";

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

fetchBooks();
