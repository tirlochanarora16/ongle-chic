import style from "./Title.module.scss";

const Title = () => {
  return (
    <div className={style.title}>
      <div className={style["title__container"]}>
        <h1>Ongle Chic</h1>
        <h3>Paris</h3>
      </div>
    </div>
  );
};

export default Title;
