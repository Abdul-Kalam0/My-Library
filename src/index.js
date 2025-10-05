import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import AllBooks from "./pages/AllBooks";
import AddBooks from "./pages/AddBooks";
import BookProvider from "./contexts/BookContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <AllBooks /> },
      { path: "/add", element: <AddBooks /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BookProvider>
    <RouterProvider router={router} />
  </BookProvider>
);
