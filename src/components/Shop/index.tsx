import { Cart } from "../../App";
import style from "./Shop.module.css";

interface props {
  setFilter: (setValue: Cart[]) => void;
  filter: Cart[];
  original: Cart[];
}

function Shop({ filter }: props) {
  return (
    <section className={style.body}>
      {filter.map((cart, id) => (
        <div key={id} className={style.cart}>
          <p className={style.price}>${cart.price}</p>
          <p className={style.name}>{cart.name}</p>
          <p className={style.count}>Count {cart.count}</p>
        </div>
      ))}
    </section>
  );
}

export default Shop;
