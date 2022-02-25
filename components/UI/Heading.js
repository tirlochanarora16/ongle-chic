import style from "./Heading.module.scss";

const Heading = (props) => {
  return (
    <h1 className={style.heading} style={props.style}>
      {props.children}
    </h1>
  );
};

export default Heading;
