import style from "./Header.module.css";

interface props {
  sorting: (type: number) => void;
  filter: (text: string) => void;
}

function Header({ sorting, filter }: props) {
  return (
    <header className={style.header}>
      <input
        className={style.search}
        type="text"
        onChange={(e) => filter(e.target.value)}
      />
      <div className={style.sorting}>
        <button onClick={() => sorting(0)} className={style.sortButton}>
          Price
        </button>
        <button onClick={() => sorting(1)} className={style.sortButton}>
          Name
        </button>
        <button onClick={() => sorting(2)} className={style.sortButton}>
          Count
        </button>
      </div>
    </header>
  );
}

export default Header;
