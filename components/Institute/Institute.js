import Image from "next/image";
import Title from "../Title/Title";
import Contact from "../Contact/Contact";

import nailpolish from "../../images/institute/nailpolish.png";

import style from "./Institute.module.scss";

const Institute = () => {
  return (
    <section className={style.institute}>
      <div className={style["intitute__title"]}>
        <Title />
      </div>
      <div className={style["institute__contact"]}>
        <Contact />
      </div>
      <div className={style["institute__content"]}>
        <div className={style["institute__image"]}>
          <Image src={nailpolish} alt="nailpolish" width={225} height={300} />
        </div>
        <div className={style["institute__text"]}>
          <div className={style["institute__text-box"]}>
            <h3>L’INSTITUT</h3>
            <p>Sophie vous accueil :</p>
            <p>Café à votre demande</p>
            <p>Conseils, astuces</p>
            <p>Patiente et à l’écoute</p>
          </div>
          <div className={style["institute__text-box"]}>
            <h3>HYGIÈNE</h3>
            <p>
              Tout est mis en oeuvre pour vous accueillir
              <br /> dans de bonnes conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institute;
