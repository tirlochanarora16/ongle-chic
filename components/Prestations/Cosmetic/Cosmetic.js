import Image from "next/image";

import nailpolish from "../../../images/prestation/2.png";
import items from "../../../images/prestation/6.png";

import style from "./Cosmetic.module.scss";

const Cosmetic = () => {
  return (
    <div className={style.cosmetic}>
      <div className={style["cosmetic__title"]}>
        <h1>VENTE DE COSMÉTIQUE</h1>
        <h2>Accesoires de mode</h2>
      </div>
      <div className={style["cosmetic__content"]}>
        <div className={style["cosmetic__content-1"]}>
          <Image src={nailpolish} alt="nailpolish" width={200} height={400} />
        </div>
        <div className={style["cosmetic__content-2"]}>
          <Image src={items} alt="nailpolish" width={450} height={450} />
        </div>
      </div>
    </div>
  );
};

export default Cosmetic;
