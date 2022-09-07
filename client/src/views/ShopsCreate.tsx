import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createShop } from "../store/actions/shopsActions";
import { useAppSelector, useAppDispatch } from "../store/hooks";

function ShopsCreate() {
  const techniks = useAppSelector((state) =>
    state.user.users.filter((u) => u.role === "TECHNIK")
  );
  const sales = useAppSelector((state) =>
    state.user.users.filter((u) => u.role === "SALES")
  );
  const clients = useAppSelector((state) =>
    state.user.users.filter((u) => u.role === "CLIENT")
  );
  const [name, setName] = useState("");
  const [addres, setAddres] = useState("");
  const [contact, setContact] = useState("");
  const [technikId, setTechnikId] = useState(techniks[0].id.toString());
  const [salesId, setSalesId] = useState(sales[0].id.toString());
  const [userId, setUserId] = useState(clients[0].id.toString());

  const dispatch = useAppDispatch();

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const addresHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddres(e.currentTarget.value);
  };
  const contactHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(e.currentTarget.value);
  };
  const handleTechnik = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTechnikId(e.target.value);
  };
  const handleSales = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSalesId(e.target.value);
  };
  const handleClient = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(e.target.value);
  };

  const createHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(createShop({ name, addres, contact, userId, technikId, salesId }));
  };
  return (
    <div className='px-5 md:w-[800px] md:mx-auto'>
      <Link
        to='/shops'
        className='bg-gray-400 text-white text-center px-4 py-2 rounded block mb-2'
      >
        Назад
      </Link>
      <div className='mx-4'>
        <p>
          Название
          <input
            placeholder='Введите название'
            type='text'
            className='border border-blue-500 ml-5'
            value={name}
            onChange={(e) => nameHandler(e)}
          />
        </p>
        <p>
          Адрес
          <input
            placeholder='Введите адрес'
            type='text'
            className='border border-blue-500 ml-5'
            value={addres}
            onChange={(e) => addresHandler(e)}
          />
        </p>
        <p>
          Телефон
          <input
            placeholder='Введите телефон'
            type='text'
            className='border border-blue-500 ml-5'
            value={contact}
            onChange={(e) => contactHandler(e)}
          />
        </p>
        <p>
          <label>
            Техник
            <select value={technikId} onChange={handleTechnik}>
              {techniks.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <label>
            Торговый
            <select value={salesId} onChange={handleSales}>
              {sales.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <label>
            Клиент
            <select value={userId} onChange={handleClient}>
              {clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <button className='p-2 bg-green-500 text-white' onClick={createHandler}>
          Создать
        </button>
      </div>
    </div>
  );
}

export default ShopsCreate;
