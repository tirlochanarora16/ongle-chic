import Container from "../../UI/Container";
import Heading from "../../UI/Heading";
import style from "./Pieds.module.scss";

const Pieds = () => {
  const items = [
    {
      title:
        "Talons, lime, balnéo, cuticules, gommage, masque, crème demassage hydratante + vernis classique",
      amount: 49,
    },
    {
      title: "Vernis semis permanent ",
      amount: 20,
    },
  ];

  return (
    <Container>
      <Heading>La beauté des pieds</Heading>
      <div className={style["pieds__items"]}>
        {items.map((item, index) => (
          <div className={style["pieds__item"]} key={item + index}>
            <p>{item.title}</p>
            <p>{item.amount}&euro;</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Pieds;
