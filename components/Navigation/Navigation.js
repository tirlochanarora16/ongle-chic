import Link from "next/link";
import { useState } from "react";
import style from "./Navigation.module.scss";

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className={style.navigation}>
      <ul className={style["navigation__container"]}>
        <div
          className={style["navigation__mobile"]}
          onClick={handleMobileMenuHandler}
        >
          <div className={style["navigation__mobile-nav"]}></div>
          <div className={style["navigation__mobile-nav"]}></div>
          <div className={style["navigation__mobile-nav"]}></div>
        </div>
        <div
          className={style["navigation__items"]}
          style={{ display: showMobileMenu ? "block" : "none" }}
        >
          <div className={style["navigation__item"]}>
            <Link href="/">Accueil</Link>
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
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
