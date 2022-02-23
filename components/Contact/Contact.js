import style from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style["contact__number"]}>
        <div className={style["contact__number-1"]}>06.83.05.97.01</div>
        <div className={style["contact__number-2"]}>01.45.31.11.20</div>
      </div>
      <div className={style["contact__button"]}>Nous contacter</div>
    </div>
  );
};

export default Contact;
