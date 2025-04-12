import { useState } from "react";
import style from "./App.module.css";
import Header from "./components/Header";
import Shop from "./components/Shop";

export interface Cart {
  name: string;
  price: number;
  count: number;
}

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const words = ["line", "word", "react", "node"];
const Carts: Cart[] = Array.from(
  { length: 10 },
  (): Cart => ({
    name: `${words[rand(0, words.length - 1)]} ${rand(0, 100)}`,
    price: rand(100, 1000),
    count: rand(1, 100),
  })
);

function App() {
  const [CartsFilter, setCartsFilter] = useState<Cart[]>(Carts);
  let sortDirect: number = -1;

  const sorting = (type: number) => {
    if (sortDirect === type) {
      setCartsFilter([...CartsFilter].reverse());
      console.log(-1);
    } else {
      switch (type) {
        case 0:
          setCartsFilter(CartsFilter.sort((a, b) => a.price - b.price));
          sortDirect = 0;
          console.log(0);
          break;
        case 1:
          setCartsFilter(CartsFilter.sort());
          sortDirect = 1;
          console.log(1);
          break;
        case 2:
          setCartsFilter(CartsFilter.sort((a, b) => a.count - b.count));
          sortDirect = 2;
          console.log(2);
          break;
      }
    }
  };

  return (
    <main className={style.body}>
      <Header sorting={sorting}></Header>
      <Shop
        filter={CartsFilter}
        setFilter={(setValue) => setCartsFilter(setValue)}
        original={Carts}
      ></Shop>
    </main>
  );
}

export default App;
