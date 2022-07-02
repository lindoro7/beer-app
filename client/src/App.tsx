import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./views/Home";
import About from "./views/About";
import Equipment from "./views/Equipment";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/equipment' element={<Equipment />} />
      </Routes>
    </>
  );
}

export default App;
