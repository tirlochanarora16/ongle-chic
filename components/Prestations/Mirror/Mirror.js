import style from "./Mirror.module.scss";

const Mirror = () => {
  return (
    <div className={style.mirror}>
      <div className={style["mirror__content"]}>
        <h2>Miroirs et Paillettes</h2>
        <p>
          Miroir, Chrome, Kaki, Argent, Or, Vert <br /> Cuivre, Rouge, Rose
        </p>
      </div>
    </div>
  );
};

export default Mirror;
