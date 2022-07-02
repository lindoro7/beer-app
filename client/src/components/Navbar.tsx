import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className='flex flex-nowrap justify-between'>
        <div className='text-white text-3xl '>Keller</div>
        <ul className='flex flex-nowrap text-white '>
          <li className='h-max'>
            <NavLink
              to='/'
              className='rounded px-2 py-2 inline-block text-center align-middle'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className='rounded px-2 py-2 inline-block text-center align-middle'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/equipment'
              className='rounded px-2 py-2 inline-block text-center align-middle'
            >
              Equipment
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
