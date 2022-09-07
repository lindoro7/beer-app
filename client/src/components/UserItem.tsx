import { IUser } from "../interfaces";
import { Link } from "react-router-dom";

function UserItem(user: IUser) {
  return (
    <div
      key={user.id}
      className='border rounded mb-4 px-3 flex justify-between  md:basis-1/3 shadow-lg shadow-indigo-500/50'
    >
      <div className=''>
        <h3>Имя: {user.name || "Аноним"}</h3>
        <h4>Логин: {user.login}</h4>
        <p>Роль: {user.role}</p>
        <p>Телефон: 8{user.contact || "Номер не указан"}</p>
      </div>
      <div className='flex flex-col justify-around text-white'>
        <Link
          to={`/users/${user.id}`}
          className='bg-gray-400 p-1 shadow-lg shadow-indigo-500/50 rounded'
        >
          Просмотр
        </Link>
        <Link
          to={`/users/${user.id}/update`}
          className='bg-green-400 p-1 shadow-lg shadow-indigo-500/50 rounded'
        >
          Изменить
        </Link>
      </div>
    </div>
  );
}

export default UserItem;
