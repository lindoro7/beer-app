import { Link } from "react-router-dom";
import { IShop } from "../interfaces";
import { useAppSelector, useAppDispatch } from "../store/hooks";

function ShopItem(shop: IShop) {
  const { user } = useAppSelector((state) => state.user);
  const technik = useAppSelector((state) =>
    state.user.users.find((user) => user.id === shop.technikId)
  );
  const sales = useAppSelector((state) =>
    state.user.users.find((user) => user.id === shop.salesId)
  );

  return (
    <div
      key={shop.id}
      className='mb-2  border rounded flex justify-between shadow-lg shadow-indigo-500/50 px-3'
    >
      <div className=''>
        <p>{shop.name}</p>
        <p>{shop.addres}</p>
        <p>
          Техник: {technik?.name} 8{technik?.contact}
        </p>
        <p>
          Торговый: {sales?.name} 8{sales?.contact}
        </p>
      </div>
      <div className='flex flex-col justify-around text-white'>
        <Link
          to={`/shops/${shop.id}`}
          className='bg-gray-400 p-1 shadow-lg shadow-indigo-500/50 rounded'
        >
          Просмотр
        </Link>
        {user.role === "ADMIN" && (
          <Link
            to={`/shops/${shop.id}/update`}
            className='bg-green-400 p-1 shadow-lg shadow-indigo-500/50 rounded'
          >
            Изменить
          </Link>
        )}
      </div>
    </div>
  );
}

export default ShopItem;
