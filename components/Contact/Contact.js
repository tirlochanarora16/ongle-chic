import Link from "next/link";
import { useRouter } from "next/router";
import style from "./Contact.module.scss";

const Contact = () => {
  const router = useRouter();

  const contactUsHandler = () => router.push("/location");

  return (
    <div className={style.contact}>
      <div className={style["contact__number"]}>
        <div className={style["contact__number-1"]}>
          <Link href="tel: +330683059701">06.83.05.97.01</Link>
        </div>
        <div className={style["contact__number-2"]}>
          <Link href="tel: +330145311120">01.45.31.11.20</Link>
        </div>
      </div>
      <div className={style["contact__button"]} onClick={contactUsHandler}>
        Nous contacter
      </div>
    </div>
  );
};

export default Contact;
