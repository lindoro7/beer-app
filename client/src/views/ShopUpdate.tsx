import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteShop, updateShop } from "../store/actions/shopsActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Select from "react-select";

function ShopUpdate() {
  const { id } = useParams();
  const oldShop = useAppSelector((state) =>
    state.shops.shops.find((s) => Number(s.id) === Number(id))
  );
  const user = useAppSelector((state) => state.user.user);
  const technik = useAppSelector((state) =>
    state.user.users.find((u) => Number(u.id) === Number(oldShop?.technikId))
  );
  const sales = useAppSelector((state) =>
    state.user.users.find((u) => Number(u.id) === Number(oldShop?.salesId))
  );
  const client = useAppSelector((state) =>
    state.user.users.find((u) => Number(u.id) === Number(oldShop?.userId))
  );
  const techniks = useAppSelector((state) =>
    state.user.users.filter((u) => u.role === "TECHNIK")
  );
  const saleses = useAppSelector((state) =>
    state.user.users.filter((u) => u.role === "SALES")
  );
  const clients = useAppSelector((state) =>
    state.user.users.filter((u) => u.role === "CLIENT")
  );

  const [name, setName] = useState(oldShop?.name || "");
  const [contact, setContact] = useState(oldShop?.contact || "");
  const [addres, setAddres] = useState(oldShop?.addres || "");
  const [technikId, setTechnikId] = useState(technik?.id || "");
  const [salesId, setSalesId] = useState(sales?.id || "");
  const [userId, setUserId] = useState(client?.id || "");

  const selectTechniks: Array<any> = [];
  const selectSales: Array<any> = [];
  const selectClient: Array<any> = [];

  techniks.map((t) => selectTechniks.push({ value: t.id, label: t.name }));
  saleses.map((s) => selectSales.push({ value: s.id, label: s.name }));
  clients.map((c) => selectClient.push({ value: c.id, label: c.name }));

  const dispatch = useAppDispatch();

  const selectNewTechnik = async (option: any | null) => {
    setTechnikId(option.value);
  };
  const selectNewSales = async (option: any | null) => {
    setSalesId(option.value);
  };
  const selectNewClient = async (option: any | null) => {
    setUserId(option.value);
  };

  const updateHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      updateShop({ id, name, addres, contact, technikId, salesId, userId })
    );
  };

  const removeHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let result = window.confirm("Действительно удалить магазин?");

    if (!result) return;

    dispatch(deleteShop(id));
  };

  return (
    <div className='px-5 md:w-[800px] md:mx-auto'>
      <Link
        to='/shops'
        className='bg-gray-400 text-white text-center px-4 py-2 rounded block mb-2'
      >
        Назад
      </Link>
      <div className='mb-5'>Shop update {id}</div>
      <div className='mb-2 '>
        <span className='mr-3'>{oldShop?.name}</span>
        <input
          type='text'
          placeholder='Новое имя'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className='mb-2'>
        <span className='mr-3'>{oldShop?.contact}</span>
        <input
          type='text'
          placeholder='Новый телефон без 8'
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
      </div>
      <div className='mb-2'>
        <span className='mr-3'>{oldShop?.addres}</span>
        <input
          type='text'
          placeholder='Новый адрес'
          onChange={(e) => {
            setAddres(e.target.value);
          }}
        />
      </div>
      <div className='mb-2'>
        <span className='mr-3'>Техник: {technik?.name}</span>
        <Select
          onChange={(option) => selectNewTechnik(option)}
          options={selectTechniks}
        />
      </div>
      <div className='mb-2 '>
        <span className='mr-3'>Торговый: {sales?.name}</span>
        <Select
          onChange={(option) => selectNewSales(option)}
          options={selectSales}
        />
      </div>
      <div className='mb-2'>
        <span className='mr-3'>Клиент: {client?.name}</span>
        <Select
          onChange={(option) => selectNewClient(option)}
          options={selectClient}
        />
      </div>

      <button
        onClick={(e) => updateHandler(e)}
        className='text-white bg-green-600 p-2 mr-5 shadow-lg shadow-indigo-500/50 rounded'
      >
        Изменить
      </button>
      {user.role === "ADMIN" && (
        <button
          onClick={(e) => removeHandler(e)}
          className='text-white bg-red-400 p-2 shadow-lg shadow-indigo-500/50 rounded'
        >
          Удалить
        </button>
      )}
    </div>
  );
}

export default ShopUpdate;
