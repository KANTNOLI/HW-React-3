import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <input type="text" />
      <div className={style.sorting}>
        <span className={style.sortSpan}>
          <input type="radio" name="sort" />
          price
        </span>

        <span className={style.sortSpan}>
          <input type="radio" name="sort" />
          name
        </span>

        <span className={style.sortSpan}>
          <input type="radio" name="sort" />
          name length
        </span>
      </div>

      
    </header>
  );
}

export default Header;
