import "./styles.css";

import { Routes, Route } from "react-router-dom";

// import SignIn from "./pages/signin/SignIn";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
