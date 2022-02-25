import Container from "../../UI/Container";
import Heading from "../../UI/Heading";
import BoxItem from "../BoxItem";
import style from "./Resine.module.scss";

const Resine = () => {
  return (
    <Container>
      <Heading>La Résine en façonnage H/F</Heading>
      <div className={style["resine__content"]}>
        <BoxItem title="Pose complète" amount={63} />
        <BoxItem title="Remplissage 3 semaines" amount={49} />
      </div>
    </Container>
  );
};

export default Resine;
