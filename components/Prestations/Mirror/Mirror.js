import Container from "../../UI/Container";
import Heading from "../../UI/Heading";
import style from "./Mirror.module.scss";

const Mirror = () => {
  return (
    <Container>
      <Heading>Miroirs et Paillettes</Heading>
      <div className={style["mirror__content"]}>
        <p>
          Miroir, Chrome, Kaki, Argent, Or, Vert <br /> Cuivre, Rouge, Rose
        </p>
      </div>
    </Container>
  );
};

export default Mirror;
