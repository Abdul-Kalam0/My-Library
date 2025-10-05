import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

function AllBooks() {
  const { books, toggleStatus, deleteBook } = useContext(BookContext);
  const [filter, setFilter] = useState("All");

  // Filter books safely
  const filteredBooks =
    filter === "All" ? books : books?.filter((b) => b?.status === filter);

  // Counts safely
  const readCount = books?.filter((b) => b?.status === "Read")?.length || 0;
  const unreadCount = books?.filter((b) => b?.status === "Unread")?.length || 0;

  // Show message if no books
  //   if (!books || books.length === 0) {
  //     return <p className="text-muted">No books found.</p>;
  //   }

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h3 className="mb-4">📚My Library</h3>

        {/* Filter Dropdown */}
        <div className="mb-3">
          <select
            className="form-select w-auto"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Books ({books?.length || 0})</option>
            <option value="Read">Read ({readCount})</option>
            <option value="Unread">Unread ({unreadCount})</option>
          </select>
        </div>
      </div>

      {/* Book List */}
      {filteredBooks?.length === 0 ? (
        <p className="text-muted">No books found for this filter.</p>
      ) : (
        <ul className="list-group">
          {filteredBooks?.map((book) => (
            <li
              key={book?.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5 className="mb-1">{book?.title}</h5>
                <p className="mb-1 text-muted">By {book?.author}</p>
                <span
                  className={`badge ${
                    book?.status === "Read"
                      ? "bg-success"
                      : "bg-warning text-dark"
                  }`}
                >
                  {book?.status}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-2">
                <button
                  onClick={() => toggleStatus(book?.id)}
                  className="btn btn-sm btn-outline-primary"
                >
                  Toggle
                </button>
                <button
                  onClick={() => deleteBook(book?.id)}
                  className="btn btn-sm btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllBooks;
