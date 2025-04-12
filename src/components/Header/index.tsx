import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <input type="text" />
      <div className={style.sorting}>
        <span>
          <input type="radio" name="sort" />
          asd
        </span>

        <span>
          <input type="radio" name="sort" />
          asd
        </span>

        <span>
          <input type="radio" name="sort" />
          asd
        </span>

        <span>
          <input type="radio" name="sort" />
          asd
        </span>
      </div>
    </header>
  );
}

export default Header;
