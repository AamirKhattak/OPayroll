import "./styles.css";

import { Routes, Route, Link } from "react-router-dom";

import SignIn from "./pages/signin/SignIn";
import Home from "./pages/Home";
import About from "./pages/About";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">about</Link>
      <Link to="sigin">signin</Link>
    </nav>
  );
}

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sigin" element={<SignIn />} />
      </Routes>
    </div>
  );
}
