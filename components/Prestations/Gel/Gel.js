import Container from "../../UI/Container";
import Heading from "../../UI/Heading";
import BoxItem from "../BoxItem";
import style from "./Gel.module.scss";

const Gel = () => {
  return (
    <Container>
      <Heading>Résine et Façonnage</Heading>
      <div className={style["gel__content"]}>
        <BoxItem
          title="1ère Pose complète, finition transparente ou vernis classique (1h15)"
          amount={63}
        />
        <BoxItem title="Remplissage 3 semaines (1h)" amount={49} />
        <BoxItem
          title="1ère Pose complète avec semi permanent (1h15)"
          amount={83}
        />
        <BoxItem title="Remplissage 3 semaines" amount={69} />
      </div>
    </Container>
  );
};

export default Gel;
