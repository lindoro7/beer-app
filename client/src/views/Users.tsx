import React, { useEffect, useState } from "react";
import { IUser } from "../interfaces";
import UserItem from "../components/UserItem";
import { fetchUsers } from "../store/actions/userActions";
import { useAppSelector, useAppDispatch } from "../store/hooks";

function Users() {
  const { users, user } = useAppSelector((state) => state.user);
  const [value, setValue] = useState("ALL");
  const dispatch = useAppDispatch();

  function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  useEffect(() => {
    dispatch(fetchUsers(user));
  }, [dispatch]);

  return (
    <div className='px-5 md:w-[800px] md:mx-auto'>
      <label>
        <input
          type='radio'
          name='radio'
          value='ALL'
          checked={value === "ALL" ? true : false}
          onChange={changeValue}
        />
        Все
      </label>

      <label>
        <input
          type='radio'
          name='radio'
          value='TECHNIK'
          checked={value === "TECHNIK" ? true : false}
          onChange={changeValue}
        />
        Техники
      </label>

      <label>
        <input
          type='radio'
          name='radio'
          value='CLIENT'
          checked={value === "CLIENT" ? true : false}
          onChange={changeValue}
        />
        Клиенты
      </label>
      <label>
        <input
          type='radio'
          name='radio'
          value='SALES'
          checked={value === "SALES" ? true : false}
          onChange={changeValue}
        />
        Торговые
      </label>
      <label>
        <input
          type='radio'
          name='radio'
          value='USER'
          checked={value === "USER" ? true : false}
          onChange={changeValue}
        />
        Не назначенные
      </label>

      {users.length > 0
        ? users.map((u: IUser) => {
            if (u.role === "ADMIN") return null;
            if (value === "ALL") return UserItem(u);
            if (u.role === value) return UserItem(u);
          })
        : "No users"}
    </div>
  );
}

export default Users;
