import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className='flex min-h-[85vh]  justify-center items-center'>
      <form className='flex flex-col w-[85vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] mb-5 sm:mb-0'>
        <label className='block mb-5'>
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            type='email'
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            placeholder='Введите почту'
          />
        </label>
        <label className='block mb-5'>
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            type='password'
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            placeholder='Введите пароль'
          />
        </label>
        <label className='block mb-5'>
          <span className=' block text-sm font-medium text-slate-700'>
            Name
          </span>
          <input
            type='text'
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            placeholder='Введите имя'
          />
        </label>
        <label className='block mb-5'>
          <span className=' block text-sm font-medium text-slate-700'>
            Phone
          </span>
          <input
            type='tel'
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            placeholder='Введите телефон'
          />
        </label>
        <>
          <button className='block w-full border-solid border-2 rounded-md bg-gray-500 h-10 text-white mb-5'>
            Зарегистрироваться
          </button>
          <span className='inline-block '>
            Есть аккаунт?
            <Link to='/login' className='text-green-700 pl-5'>
              Войти
            </Link>
          </span>
        </>
      </form>
    </div>
  );
}

export default Register;
