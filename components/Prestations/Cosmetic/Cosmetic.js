import { useEffect, useState } from "react";
import Image from "next/image";

import Container from "../../UI/Container";

import nailpolish from "../../../images/prestation/2.png";
import items from "../../../images/prestation/6.png";

import style from "./Cosmetic.module.scss";

const Cosmetic = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <Container>
      <div className={style["cosmetic__title"]}>
        <h1>VENTE DE COSMÉTIQUE</h1>
        <h2>Accesoires de mode</h2>
      </div>
      <div className={style["cosmetic__content"]}>
        <div className={style["cosmetic__content-1"]}>
          {width > 1200 && (
            <Image src={nailpolish} alt="nailpolish" width={200} height={400} />
          )}
        </div>
        <div className={style["cosmetic__content-2"]}>
          {width > 1200 && (
            <Image
              src={items}
              alt="nailpolish"
              width={width < 1100 ? 400 : 450}
              height={width < 1100 ? 400 : 450}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Cosmetic;
