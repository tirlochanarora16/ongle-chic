import BoxItem from "../BoxItem";
import style from "./Soins.module.scss";

const Soins = () => {
  return (
    <div className={style.soins}>
      <h1>Soins des cils</h1>
      <div className={style["soins__items"]}>
        <BoxItem title="Réhaussement de cils" amount={57} />
        <BoxItem title="Teinture de cils" amount={27} />
        <BoxItem title="Teinture de sourcils" amount={20} />
      </div>
    </div>
  );
};

export default Soins;
