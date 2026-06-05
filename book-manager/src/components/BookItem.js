function BookItem({ book, deleteBook }) {
  return (
    <li>
      <strong>{book.title}</strong> — {book.author} ({book.year})

      <button
        onClick={() => deleteBook(book.id)}
        style={{ marginLeft: "10px" }}
      >
        Видалити
      </button>
    </li>
  );
}

export default BookItem;