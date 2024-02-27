import Button from "./Button";
import styles from "./Navigation.module.css";

const Navigation = ({ showProduct, hideProduct }) => {
  return (
    <>
      <div className={styles.container}>
        <img src="../images/Logo.png" alt="Logo" />
        <Button text="Hide" onClick={hideProduct}></Button>
        <Button text="Show" onClick={showProduct}></Button>
        <p>Help</p>
      </div>
    </>
  );
};

export default Navigation;
