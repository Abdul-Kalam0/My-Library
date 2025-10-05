import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function AddBooks() {
  const { books, addBook, toggleStatus, deleteBook } = useContext(BookContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    status: "Unread",
  });

  const chnageHandler = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //   console.log(form);

  const submitHandler = () => {
    if (!form.title || !form.author) return;

    const newBook = {
      id: Date.now(),
      ...form,
    };
    addBook(newBook);
    console.log(newBook);
    navigate("/");
  };

  return (
    <div className="container">
      <h4 className="text-center text-primary mb-4 fw-bold">Add Book</h4>

      <form onSubmit={submitHandler}>
        {/* title */}
        <div className="form-group my-2">
          <label htmlFor="title" className="pb-2">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={form.title}
            onChange={chnageHandler}
            className="form-control"
            required
          />
        </div>
        {/* author */}
        <div className="form-group my-2">
          <label htmlFor="author" className="pb-2">
            Author:
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={form.author}
            onChange={chnageHandler}
            className="form-control"
            required
          />
        </div>
        {/* status */}
        <div className="form-group my-2">
          <label htmlFor="" className="pb-2">
            Status:
          </label>
          <select
            name="status"
            className="form-select"
            value={form.status}
            onChange={chnageHandler}
            className="form-control"
          >
            <option value="Read">Read</option>
            <option value="Unread">Unread</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBooks;
