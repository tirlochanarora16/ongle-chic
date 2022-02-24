import style from "./BoxItem.module.scss";

const BoxItem = (props) => {
  return (
    <div className={style["box__item"]} style={{ justifyContent: props.style }}>
      <p>{props.title}</p>
      <p>{props.amount.toFixed(2)}&euro;</p>
    </div>
  );
};

export default BoxItem;
