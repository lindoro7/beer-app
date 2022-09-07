import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../store/hooks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      <nav className='flex flex-nowrap justify-between px-3 md:p-5'>
        <button className='p-3 md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='white'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-8 md:hidden'
              fill='none'
              viewBox='0 0 24 24'
              stroke='white'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </button>

        <div className='text-white text-3xl p-3 md:p-0'>Keller</div>
        <ul
          className={
            "absolute w-full top-[60px] pt-5 z-5 md:z-0 md:pt-0 bottom-0 left-0 md:w-auto bg-gray-500 md:static md:flex md:flex-nowrap text-white " +
            (isOpen
              ? "translate-x-0 ease-in-out duration-300 z-[9999]"
              : "-translate-x-[100%] md:transform-none ease-in-out duration-300 z-0")
          }
        >
          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink
              to='/'
              className='w-30 rounded px-2 py-2 block md:inline-block text-center align-middle'
            >
              Домашняя
            </NavLink>
          </li>
          {user.role === "ADMIN" && (
            <li onClick={() => setIsOpen(!isOpen)}>
              <NavLink
                to='/users'
                className='rounded px-2 py-2 block md:inline-block text-center align-middle'
              >
                Пользователи
              </NavLink>
            </li>
          )}
          {!user.id && (
            <li onClick={() => setIsOpen(!isOpen)}>
              <NavLink
                to='/about'
                className='rounded px-2 py-2 block md:inline-block text-center align-middle'
              >
                О нас
              </NavLink>
            </li>
          )}
          {user.id && (
            <li onClick={() => setIsOpen(!isOpen)}>
              <NavLink
                to='/shops'
                className='rounded px-2 py-2 block md:inline-block text-center align-middle'
              >
                Магазины
              </NavLink>
            </li>
          )}
          {user.id && (
            <li onClick={() => setIsOpen(!isOpen)}>
              <NavLink
                to='/equipment'
                className='rounded px-2 py-2 block md:inline-block text-center align-middle'
              >
                Оборудование
              </NavLink>
            </li>
          )}
          {!user.id && (
            <li onClick={() => setIsOpen(!isOpen)}>
              <NavLink
                to='/login'
                className='rounded px-2 py-2 block md:inline-block text-center align-middle'
              >
                Вход
              </NavLink>
            </li>
          )}
          {!user.id && (
            <li onClick={() => setIsOpen(!isOpen)}>
              <NavLink
                to='/register'
                className='rounded px-2 py-2 block md:inline-block text-center align-middle'
              >
                Регистрация
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
