import Container from "../../UI/Container";

import BoxItem from "../BoxItem";
import style from "./Poses.module.scss";

const PosesBox = (props) => {
  return (
    <div className={style["poses__box"]}>
      <h2>Semi Permanent</h2>
      <div className={style["poses__items"]}>
        {props.items.map((item, index) => (
          <BoxItem
            key={item + index}
            title={item.title}
            amount={item.amount}
            style="flex-end"
          />
        ))}
      </div>
    </div>
  );
};

const Poses = () => {
  return (
    <Container>
      <div className={style["poses__content"]}>
        <PosesBox
          title="mains"
          items={[
            {
              title: "Lime + verni semi permanent",
              amount: 36,
            },
            {
              title: "Manucure 4 soins et semi permanent",
              amount: 59,
            },
            {
              title: "Dépose simple semi permanent et soins",
              amount: 20,
            },
          ]}
        />
        <PosesBox
          title="pieds"
          items={[
            {
              title: "Lime, dépose, verni semi permanen + repose",
              amount: 40,
            },
            {
              title: "Beauté des pieds et verni semi permanent",
              amount: 69,
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default Poses;
