import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { IShop } from "../interfaces";
import ShopItem from "../components/ShopItem";
import { fetchShops } from "../store/actions/shopsActions";
import { useAppDispatch } from "../store/hooks";

function Shops() {
  const { shops } = useAppSelector((state) => state.shops);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  return (
    <div className='px-5 md:w-[800px] md:mx-auto'>
      {user.role === "ADMIN" && (
        <Link
          to='/shops/create'
          className='bg-gray-400 text-white text-center px-4 py-2 rounded block mb-2'
        >
          Создать новый
        </Link>
      )}
      {user.role === "USER" && <p>У вас нет назначенных магазинов</p>}
      {user.role === "ADMIN" &&
        shops.map((s: IShop) => {
          return ShopItem(s);
        })}
      {user.role === "TECHNIK" &&
        shops.map((s: IShop) => {
          if (s.technikId !== user.id) return;
          return ShopItem(s);
        })}
      {user.role === "SALES" &&
        shops.map((s: IShop) => {
          if (s.salesId !== user.id) return;
          return ShopItem(s);
        })}
      {user.role === "CLIENT" &&
        shops.map((s: IShop) => {
          if (s.userId !== user.id) return;
          return ShopItem(s);
        })}
    </div>
  );
}

export default Shops;
