import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./views/Home";
import About from "./views/About";
import Equipment from "./views/Equipment";
import Shops from "./views/Shops";
import ShopPage from "./views/ShopPage";
import ShopUpdate from "./views/ShopUpdate";
import ShopsCreate from "./views/ShopsCreate";
import Login from "./views/Login";
import Register from "./views/Register";
import Users from "./views/Users";
import UserUpdate from "./views/UserUpdate";
import UserProfile from "./views/UserProfile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/about' element={<About />} />
        <Route path='/equipment' element={<Equipment />} />
        <Route path='/shops' element={<Shops />} />
        <Route path='/shops/:id' element={<ShopPage />} />
        <Route path='/shops/:id/update' element={<ShopUpdate />} />
        <Route path='/shops/create' element={<ShopsCreate />} />
        <Route path='/users/:id' element={<UserProfile />} />
        <Route path='/users/:id/update' element={<UserUpdate />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
