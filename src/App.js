import "./styles.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main>
        <div>
          <NavBar />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
