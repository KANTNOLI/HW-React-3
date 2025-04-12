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
  const [SortDirect, setSortDirect] = useState<number>(-1);

  const sorting = (type: number) => {
    const mArray = [...CartsFilter];

    console.log(type);
    console.log(SortDirect);

    if (type == SortDirect) {
      setCartsFilter(mArray.reverse());
    } else {
      switch (type) {
        case 0:
          mArray.sort((a, b) => a.price - b.price);
          setSortDirect(0);
          break;
        case 1:
          mArray.sort((a, b) => a.name.localeCompare(b.name));
          setSortDirect(1);
          break;
        case 2:
          mArray.sort((a, b) => a.count - b.count);
          setSortDirect(2);
          break;
      }

      setCartsFilter(mArray);
    }
  };

  const filter = (text: string) => {
    const mArray = [...Carts];

    setCartsFilter(
      mArray.filter((cart) => {
        if (cart.name.toLowerCase().includes(text.toLowerCase())) {
          return cart;
        }
      })
    );
  };

  return (
    <main className={style.body}>
      <Header sorting={sorting} filter={filter}></Header>
      <Shop
        filter={CartsFilter}
        setFilter={(setValue) => setCartsFilter(setValue)}
        original={Carts}
      ></Shop>
    </main>
  );
}

export default App;
