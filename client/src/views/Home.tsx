import { useEffect } from "react";
import { userLogout } from "../store/actions/userActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { nullShop, fetchShops } from "../store/actions/shopsActions";
import { fetchUsers } from "../store/actions/userActions";
function Home() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers(user));
    dispatch(fetchShops());
  }, [dispatch]);
  return (
    <div className='px-5 md:w-[800px] md:mx-auto'>
      {user.id && (
        <div className='flex justify-between align-middle text-lg font-bold px-5'>
          <div>{user.name || "Аноним"}</div>
          <div>{user.role}</div>
          <button
            className='bg-gray-400 text-white px-4 py-2 rounded'
            onClick={() => dispatch(userLogout())}
          >
            Exit
          </button>
        </div>
      )}
      {!user.id && (
        <div>
          <h1>Home page</h1>
          <p>1 Всякие интересности для неавторизованых пользователей</p>
          <p>2 Карта с точками магазинов</p>
        </div>
      )}
    </div>
  );
}

export default Home;
