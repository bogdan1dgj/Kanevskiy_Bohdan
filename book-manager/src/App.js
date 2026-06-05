import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:3001/books";

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    setLoading(true);

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Помилка завантаження");
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const addBook = (newBook) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((data) => {
        setBooks([...books, data]);
      });
  };

  const deleteBook = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => {
      setBooks(books.filter((book) => book.id !== id));
    });
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />

      <BookForm addBook={addBook} />

      <br />

      <input
        type="text"
        placeholder="Пошук книги..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Завантаження...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <BookList
          books={filteredBooks}
          deleteBook={deleteBook}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;