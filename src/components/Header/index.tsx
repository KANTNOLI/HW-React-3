import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <input className={style.search} type="text" />
      <div className={style.sorting}>
        <button className={style.sortButton}>price</button>
        <button className={style.sortButton}>name</button>
        <button className={style.sortButton}>name length</button>
      </div>
    </header>
  );
}

export default Header;
