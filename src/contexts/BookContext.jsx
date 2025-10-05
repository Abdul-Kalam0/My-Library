import { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("books_v2");
      const validData =
        stored && stored !== "undefined" ? JSON.parse(stored) : [];
      setBooks(validData);
    } catch (error) {
      console.error("Invalid data in localStorage:", error);
      setBooks([]);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("books_v2", JSON.stringify(books));
  }, [books]);

  // ADD BOOK
  const addBook = (book) => setBooks((prev) => [...(prev || []), book]);

  // DELETE BOOK
  const deleteBook = (id) =>
    setBooks((prev) => prev.filter((b) => b.id !== id));

  // TOGGLE STATUS
  const toggleStatus = (id) =>
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? { ...book, status: book.status === "Read" ? "Unread" : "Read" }
          : book
      )
    );

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook, toggleStatus }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;
