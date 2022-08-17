import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [contactError, setContactError] = useState("");

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const contactHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(e.currentTarget.value);
  };

  const loginHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let response = await fetch("api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name, contact }),
    });

    let data = await response.json();
    console.log(data.message, data.errors);
    if (data.message) {
      setMessage(data.message);
    }
    if (data.errors) {
      setErrors(data.errors);
    }

    if (!data.errors) {
      setEmail("");
      setPassword("");
      setName("");
      setContact("");
      setErrors([]);
    }
  };

  useEffect(() => {
    if (errors) {
      errors.forEach((err: any) => {
        err.param === "email" && setEmailError(err.msg);
        err.param === "password" && setPasswordError(err.msg);
        err.param === "name" && setNameError(err.msg);
        err.param === "contact" && setContactError(err.msg);
      });
    }
    return () => {
      setEmailError("");
      setPasswordError("");
      setNameError("");
      setContactError("");
    };
  }, [errors]);

  return (
    <div className='flex min-h-[85vh]  justify-center items-center'>
      <form className='flex flex-col w-[85vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] mb-5 sm:mb-0'>
        {message && <small className='text-red-400'>{message}</small>}
        <label className='block mb-5'>
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            type='email'
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            placeholder='Введите почту'
            value={email}
            onChange={(e) => emailHandler(e)}
          />
          {emailError && <small className='text-red-400'>{emailError}</small>}
        </label>
        <label className='block mb-5'>
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            type='password'
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            placeholder='Введите пароль'
            value={password}
            onChange={(e) => passwordHandler(e)}
          />
          {passwordError && (
            <small className='text-red-400'>{passwordError}</small>
          )}
        </label>
        <label className='block mb-5'>
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Name
          </span>
          <input
            type='text'
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            placeholder='Введите имя'
            value={name}
            onChange={(e) => nameHandler(e)}
          />
          {nameError && <small className='text-red-400'>{nameError}</small>}
        </label>
        <label className='block mb-5'>
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Phone
          </span>
          <input
            type='tel'
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            placeholder='Введите телефон без 8'
            value={contact}
            onChange={(e) => contactHandler(e)}
          />
          {contactError && (
            <small className='text-red-400'>{contactError}</small>
          )}
        </label>
        <>
          <button
            className='block w-full border-solid border-2 rounded-md bg-gray-500 h-10 text-white mb-5'
            onClick={loginHandler}
          >
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
