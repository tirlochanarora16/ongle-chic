import Container from "../../UI/Container";
import Heading from "../../UI/Heading";
import BoxItem from "../BoxItem";
import style from "./Soins.module.scss";

const Soins = () => {
  return (
    <Container>
      <Heading style={{ textAlign: "right" }}>Soins des cils</Heading>
      <div className={style["soins__items"]}>
        <BoxItem title="Réhaussement de cils" amount={57} />
        <BoxItem title="Teinture de cils" amount={27} />
        <BoxItem title="Teinture de sourcils" amount={20} />
      </div>
    </Container>
  );
};

export default Soins;
