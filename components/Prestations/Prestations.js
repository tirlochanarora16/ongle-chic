import { useState } from "react";

import Contact from "../Contact/Contact";
import Poses from "./Poses/Poses";
import Pieds from "./Pieds/Pieds";
import Soins from "./Soins/Soins";
import Cosmetic from "./Cosmetic/Cosmetic";
import Gel from "./Gel/Gel";
import Resine from "./Resine/Resine";
import Manicure from "./Manicure/Manicure";

import posesImg from "../../images/prestation/4.png";
import manicureImg from "../../images/prestation/7.png";
import gelImg from "../../images/prestation/5.png";
import piedsImg from "../../images/prestation/8.png";
import soinsImg from "../../images/prestation/9.png";
import resineImg from "../../images/prestation/3.png";

import style from "./Prestations.module.scss";

// radio input button
const RadioInput = (props) => {
  return (
    <div className={style.radio}>
      <div className={style["radio__container"]}>
        <input
          type="radio"
          name="active"
          id={props.id}
          defaultChecked={props.id === "poses"}
        />
        <div className={style["radio__button"]}></div>
        <label htmlFor={props.id}>{props.name}</label>
      </div>
    </div>
  );
};

const Prestations = () => {
  const [currentPrestation, setCurrentPrestation] = useState("poses");

  const changeHandler = (event) => setCurrentPrestation(event.target.id);

  const img =
    currentPrestation === "poses"
      ? posesImg.src
      : currentPrestation === "manicure"
      ? manicureImg.src
      : currentPrestation === "gel"
      ? gelImg.src
      : currentPrestation === "pieds"
      ? piedsImg.src
      : currentPrestation === "soins"
      ? soinsImg.src
      : currentPrestation === "resine"
      ? resineImg.src
      : null;

  return (
    <section
      className={style.prestations}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={style["prestations__content"]}>
        {currentPrestation === "poses" && <Poses />}
        {currentPrestation === "pieds" && <Pieds />}
        {currentPrestation === "manicure" && <Manicure />}
        {currentPrestation === "soins" && <Soins />}
        {currentPrestation === "cosmetic" && <Cosmetic />}
        {currentPrestation === "gel" && <Gel />}
        {currentPrestation === "resine" && <Resine />}
      </div>
      <div className={style["prestations__contact"]}>
        <Contact />
      </div>
      <div className={style["prestations__menu"]}>
        <form onChange={changeHandler}>
          <RadioInput id="poses" name="Poses de Semi Permanent" />
          <RadioInput id="manicure" name="La Manucure H/F" />
          <RadioInput id="gel" name="Le gel en façonnage" />
          <RadioInput id="resine" name="La résine H/F" />
          <RadioInput id="pieds" name="La beauté des pieds" />
          <RadioInput id="soins" name="Soins des cils" />
          <RadioInput id="cosmetic" name="Cosmétique et accessoires" />
        </form>
      </div>
    </section>
  );
};

export default Prestations;
