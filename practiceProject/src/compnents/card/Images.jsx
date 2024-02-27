import styles from "./Image.module.css";
const Images = ({ imgSrc }) => {
  return (
    <>
      <img src={imgSrc} alt="" className={styles.cardImage} />
    </>
  );
};

export default Images;
