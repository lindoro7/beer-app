import { Routes, Route, Link } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Equipment from "../views/Equipment";
import NotFound from "../views/NotFound";

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
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Navbar;
