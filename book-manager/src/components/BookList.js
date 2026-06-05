import BookItem from "./BookItem";

function BookList({ books, deleteBook }) {
  return (
    <div>
      <h2>Список книг</h2>

      <ul>
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            deleteBook={deleteBook}
          />
        ))}
      </ul>
    </div>
  );
}

export default BookList;