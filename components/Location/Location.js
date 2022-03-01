import { useState, useEffect } from "react";
import Image from "next/image";
import Title from "../Title/Title";
import Contact from "../Contact/Contact";
import style from "./Location.module.scss";

import location from "../../images/location/location.png";
import img2 from "../../images/location/1.png";

const Location = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <section className={style.location}>
      <div className={style["location__title"]}>
        <Title />
      </div>
      <div className={style["location__contact"]}>
        <Contact />
      </div>
      <div className={style["location__content"]}>
        <div className={style["location__address"]}>
          <div className={style["location__phone"]}>
            <p>
              Joignez votre institut <b>Ongle Chic</b> par téléphone : <br />
              06.83.05.97.01 - 01.45.31.11.20
            </p>
          </div>
          <div className={style["location__transport"]}>
            <p>Pour venir...</p>
            <p>Métro : station Convention, ligne 12, 8.</p>
            <p>Bus : lignes 39,58,62,80,89 et 95.</p>
            <p>
              Tramway : station Porte de Versailles et Georges Brassens. Lignes
              T2 et T3.{" "}
            </p>
          </div>
        </div>
        <div className={style["location__img"]}>
          {width !== 768 && (
            <Image src={location} width={400} height={300} alt="map location" />
          )}
        </div>
        {width !== 768 && (
          <div className={style["location__img-2"]}>
            <Image src={img2} alt="img2" width={400} height={300} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Location;
