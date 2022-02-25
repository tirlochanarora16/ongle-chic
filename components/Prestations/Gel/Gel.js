import Container from "../../UI/Container";
import Heading from "../../UI/Heading";
import BoxItem from "../BoxItem";
import style from "./Gel.module.scss";

const Gel = () => {
  return (
    <Container>
      <Heading>Le gel en façonnage</Heading>
      <div className={style["gel__content"]}>
        <BoxItem title="Pose complète" amount={36} />
        <BoxItem title="Remplissage 3 semaines" amount={51} />
      </div>
    </Container>
  );
};

export default Gel;
