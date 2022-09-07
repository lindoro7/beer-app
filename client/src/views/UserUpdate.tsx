import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UserUpdate() {
  let { id } = useParams();
  let initialUser = { name: "", contact: "", role: "" };
  const [oldUser, setOldUser] = useState(initialUser);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");

  const updateHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const data = await fetch(`/api/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, contact, role }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let result = window.confirm("Действительно удалить пользователя");

    if (!result) return;
    try {
      const response = await fetch(`/api/user/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    try {
      const data = await fetch(`/api/user/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user = await data.json();
      setOldUser(user);
      setRole(user.role);
      setName(user.name);
      setContact(user.contact);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className='px-5 md:w-[800px] md:mx-auto'>
      <Link
        to='/users'
        className='bg-gray-400 text-white text-center px-4 py-2 rounded block mb-2'
      >
        Назад
      </Link>
      <div className='mb-5 ml-5'>User update {id}</div>
      <div className='mb-2 ml-5'>
        <span className='mr-3'>{oldUser.name}</span>{" "}
        <input
          type='text'
          placeholder='Новое имя'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className='mb-2 ml-5'>
        <span className='mr-3'>{oldUser.contact}</span>
        <input
          type='text'
          placeholder='Новый телефон без 8'
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
      </div>
      <div className='mb-2 ml-5'>
        <span className='mr-3'>{oldUser.role}</span>
        <select
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option disabled>Выберите новую роль</option>
          <option value='USER'>USER</option>
          <option value='CLIENT'>CLIENT</option>
          <option value='SALES'>SALES</option>
          <option value='TECHNIK'>TECHNIK</option>
        </select>
      </div>

      <button
        onClick={updateHandler}
        className='text-white bg-green-600 p-2 mx-5 shadow-lg shadow-indigo-500/50 rounded'
      >
        Изменить
      </button>
      <button
        onClick={removeHandler}
        className='text-white bg-red-400 p-2 shadow-lg shadow-indigo-500/50 rounded'
      >
        Удалить
      </button>
    </div>
  );
}

export default UserUpdate;
