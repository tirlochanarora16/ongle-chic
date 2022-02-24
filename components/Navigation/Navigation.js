import Link from "next/link";
import style from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style["navigation__container"]}>
        <div className={style["navigation__item"]}>
          <Link href="#">Accueil</Link>
        </div>
        <div className={style["navigation__item"]}>
          <Link href="/prestations">Prestations</Link>
        </div>
        <div className={style["navigation__item"]}>
          <Link href="/institute">Plan d’Institut</Link>
        </div>
        <div className={style["navigation__item"]}>
          <Link href="/legal">Mentions légales</Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
