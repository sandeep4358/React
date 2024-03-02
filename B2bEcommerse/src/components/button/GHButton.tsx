import { FC } from "react";
import styles from "./GitHubButton.module.css";

interface GHButtonProps {
  isOutline: Boolean;
  text: String;
}

//below code we have used the destructuring of the props adn plase the prop with the destructure object
const GHButton: FC<GHButtonProps> = ({ isOutline, text, ...rest }) => {
  return (
    <button {...rest} className={styles.primary_btn}>
      {text}
    </button>
  );
};
export default GHButton;
