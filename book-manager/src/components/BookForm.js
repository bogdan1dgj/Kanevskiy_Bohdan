import { useState } from "react";

function BookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !year) {
      alert("Заповніть усі поля!");
      return;
    }

    addBook({
      title,
      author,
      year,
    });

    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Додати книгу</h2>

      <input
        type="text"
        placeholder="Назва"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Автор"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Рік"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <br /><br />

      <button type="submit">Додати</button>
    </form>
  );
}

export default BookForm;