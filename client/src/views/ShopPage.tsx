import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

function ShopPage() {
  const { id } = useParams();
  const currentShop = useAppSelector((state) =>
    state.shops.shops.find((s) => Number(s.id) === Number(id))
  );
  const technik = useAppSelector((state) =>
    state.user.users.find(
      (u) => Number(u.id) === Number(currentShop?.technikId)
    )
  );
  const sales = useAppSelector((state) =>
    state.user.users.find((u) => Number(u.id) === Number(currentShop?.salesId))
  );
  const client = useAppSelector((state) =>
    state.user.users.find((u) => Number(u.id) === Number(currentShop?.userId))
  );

  return (
    <div className='px-5 md:w-[800px] md:mx-auto'>
      <Link
        to='/shops'
        className='bg-gray-400 text-white text-center px-4 py-2 rounded block mb-2'
      >
        Назад
      </Link>
      <h3>{currentShop?.name}</h3>
      <p>{currentShop?.addres}</p>
      <p>8{currentShop?.contact}</p>
      <p>
        Техник: {technik?.name} 8{technik?.contact}
      </p>
      <p>
        Торговый: {sales?.name} 8{sales?.contact}
      </p>
      <p>
        Клиент: {client?.name} 8{client?.contact}
      </p>
    </div>
  );
}

export default ShopPage;
