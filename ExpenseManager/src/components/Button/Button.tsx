import { FC } from "react";
import styles from "./Button.module.css";

// const Button = (props) => {

//     const {isOutline,icon,text} = props

//   return (
//     <button className={props.isOutline ?   styles.outline_btn : styles.primary_btn}
//     >
//         {props.icon}
//         {props.text}
//     </button>
//   )
// }

//below code we have used the destructuring of the props adn plase the prop with the destructure object
interface ButtonSkaProps {
  isOutline: Boolean;
  text: string;
}
const ButtonSka: FC<ButtonSkaProps> = ({ isOutline, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {text}
    </button>
  );
};
export default ButtonSka;
