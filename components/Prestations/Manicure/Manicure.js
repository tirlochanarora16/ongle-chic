import Image from "next/image";
import Container from "../../UI/Container";

import manicureImg from "../../../images/prestation/10.png";

import style from "./Manicure.module.scss";
import BoxItem from "../BoxItem";

const Manicure = () => {
  return (
    <Container>
      <div className={style["manicure__img"]}>
        <Image src={manicureImg} alt="manicure nail service" />
      </div>
      <div className={style["manicure__items"]}>
        <div>
          <BoxItem title="Manucure avec ou sans vernis" amount={33} />
          <BoxItem
            title="Manucure 4 soins (lime, cuticules, gommage, masque modelage, crème de massage hydratante et vernis)"
            amount={39}
          />
          <BoxItem title="Pose de vernis" amount={13} />
        </div>
        <div>
          <BoxItem title="Manucure 4 soins + Paraffine" amount={79} />
          <BoxItem title="Supplément French Semi Permanent" amount={20} />
        </div>
      </div>
    </Container>
  );
};

export default Manicure;
