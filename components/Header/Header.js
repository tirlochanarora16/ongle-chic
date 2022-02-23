import Image from "next/image";

import Contact from "../Contact/Contact";

import style from "./Header.module.scss";

import tf1 from "../../images/header/tf1.png";
import elle from "../../images/header/elle.png";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style["header__container"]}>
        <div className={style["header__box"]}>
          <h1>Ils parlent de nous</h1>
          <div className={style["header__box--video"]}>
            <p>
              Voir <br /> vidéo
            </p>
            <Image src={tf1} alt="tf1" width={80} height={50} />
          </div>
          <div className={style["header__box--elle"]}>
            <Image src={elle} alt="elle" width={100} height={40} />
          </div>
        </div>
        <div className={style["header__title"]}>
          <div className={style["header__title--container"]}>
            <h1>Ongle Chic</h1>
            <h3>paris</h3>
          </div>
        </div>
      </div>
      <Contact />
    </header>
  );
};

export default Header;
