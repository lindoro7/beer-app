import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { userLogin } from "../store/actions/userActions";
import { nullError } from "../store/slices/userSlice";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { errors, message, user } = useAppSelector((state) => state.user);

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const loginHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(userLogin({ login, password }));
  };

  useEffect(() => {
    dispatch(nullError());
  }, []);

  useEffect(() => {
    if (errors) {
      errors.forEach((err: any) => {
        err.param === "login" && setLoginError(err.msg);
        err.param === "password" && setPasswordError(err.msg);
      });
    }
    return () => {
      setLoginError("");
      setPasswordError("");
    };
  }, [errors]);

  useEffect(() => {
    if (user.id) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className='flex min-h-[85vh]  justify-center items-center'>
      <form className='flex flex-col w-[85vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] mb-5 sm:mb-0'>
        {message && <small className='text-red-400'>{message}</small>}
        <label className='block mb-10'>
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Login
          </span>
          <input
            type='text'
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            placeholder='Введите почту'
            value={login}
            onChange={(e) => emailHandler(e)}
          />
          {loginError && <small className='text-red-400'>{loginError}</small>}
        </label>
        <label className='block mb-10'>
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
        <>
          <button
            className='block w-full border-solid border-2 rounded-md bg-gray-500 h-10 text-white mb-5'
            onClick={loginHandler}
          >
            Войти
          </button>
          <span className='inline-block '>
            Еще нет аккаунта?
            <Link to='/register' className='text-green-700 pl-5'>
              Зарегистрироваться
            </Link>
          </span>
        </>
      </form>
    </div>
  );
}

export default Login;
