import { Link, useParams } from "react-router-dom";
import ShopItem from "../components/ShopItem";
import { IShop } from "../interfaces";
import { useAppSelector } from "../store/hooks";
function UserProfile() {
  const { id } = useParams();

  const { shops } = useAppSelector((state) => state.shops);
  const user = useAppSelector((state) =>
    state.user.users.find((u) => Number(u.id) === Number(id))
  );

  return (
    <div className='px-5 md:w-[800px] mx-auto'>
      <Link
        to='/users'
        className='bg-gray-400 text-white text-center px-4 py-2 rounded block mb-2'
      >
        Назад
      </Link>
      <p>{user?.name}</p>
      <p>{user?.role}</p>
      {user?.role === "TECHNIK" &&
        shops.map((s: IShop) => {
          if (s.technikId !== user.id) return;
          return ShopItem(s);
        })}
      {user?.role === "CLIENT" &&
        shops.map((s: IShop) => {
          if (s.userId !== user.id) return;
          return ShopItem(s);
        })}

      {user?.role === "SALES" &&
        shops.map((s: IShop) => {
          if (s.salesId !== user.id) return;
          return ShopItem(s);
        })}
    </div>
  );
}

export default UserProfile;
