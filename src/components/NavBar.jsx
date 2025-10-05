import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function NavBar() {
  const { books } = useContext(BookContext);

  const total = books?.length || 0;
  const readCount =
    books?.filter((book) => book.status === "Read")?.length || 0;
  const unreadCount = total - readCount;

  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand container">
        <h1 className="navbar-brand">Book App</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-dark text-decoration-none">
              Books
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/add"
              className="nav-link text-dark text-decoration-none"
            >
              Add Book
            </NavLink>
          </li>
          <li className="nav-item nav-link text-dark">
            ✅ Read: {readCount} | ❌ Unread: {unreadCount}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
