import { Routes, Route, Link } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Equipment from "../views/Equipment";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/equipment'>Equipment</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/equipment' element={<Equipment />} />
      </Routes>
    </div>
  );
}

export default Navbar;
