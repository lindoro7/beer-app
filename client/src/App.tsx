import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./views/Home";
import About from "./views/About";
import Equipment from "./views/Equipment";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/equipment' element={<Equipment />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
