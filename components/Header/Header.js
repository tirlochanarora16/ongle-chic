import { useState } from "react";
import Image from "next/image";
import { ImCross } from "react-icons/im";

import Contact from "../Contact/Contact";

import style from "./Header.module.scss";

import tf1 from "../../images/header/tf1.png";
import elle from "../../images/header/elle.png";
import elleMagzine from "../../images/header/magazine-elle.jpg";

const Header = () => {
  const [showVideo, setshowVideo] = useState(false);
  const [showElle, setShowElle] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  const toggleBackdrop = () => {
    setBackdrop(false);
    setshowVideo(false);
    setShowElle(false);
  };

  const toggleVideoHandler = () => {
    setBackdrop(true);
    setshowVideo(true);
  };
  const toggleElleHandler = () => {
    setBackdrop(true);
    setShowElle(true);
  };

  return (
    <header className={style.header}>
      {backdrop && (
        <div className={style["header__backdrop"]} onClick={toggleBackdrop}>
          <div className={style["header__backdrop--icon"]}>
            <ImCross />
          </div>
        </div>
      )}
      {backdrop && showVideo && (
        <div className={style["header__video"]}>
          <video
            width="400"
            height="300"
            src={"./video.mp4"}
            controls={true}
            autoPlay
          />
        </div>
      )}
      {backdrop && showElle && (
        <div className={style["header__elle"]}>
          <Image src={elleMagzine} />
        </div>
      )}
      <div className={style["header__container"]}>
        <div className={style["header__box"]}>
          <h1>Ils parlent de nous</h1>
          <div className={style["header__boxes"]}>
            <div
              className={style["header__box--video"]}
              onClick={toggleVideoHandler}
            >
              <p>
                Voir <br /> vidéo
              </p>
              <Image src={tf1} alt="tf1" width={80} height={50} />
            </div>
            <div
              className={style["header__box--elle"]}
              onClick={toggleElleHandler}
            >
              <Image src={elle} alt="elle" width={100} height={40} />
            </div>
          </div>
        </div>
        <div className={style["header__title"]}>
          <div className={style["header__title--container"]}>
            <h1>Ongle Chic</h1>
            <h3>paris</h3>
          </div>
        </div>
      </div>
      <div className={style["header__contact"]}>
        <Contact />
      </div>
    </header>
  );
};

export default Header;
