import styles from "./login.module.css";
import Button from "../Button";
import { useEffect, useState } from "react";

const Login = () => {
  const [userId, setUserId] = useState(""); 

  useEffect(() => {
    console.log("use effect call on component load...");
  }, [userId]);

  const submitForm = (event) => {
    event.preventDefault(); //will not allow to load the page again and again.
    console.log("Test click.." + event.target[0].value);
    setUserId(event.target[0].value);
  };

  return (
    <>
      <div className={styles.login_box}> 
        <div className={styles.logo}>
          <img src="./images/Logo.png" alt="yahoo logo" />
        </div>

        <form onSubmit={submitForm} className={styles.form_container}>
          <div className={styles.form_element}>
            <label htmlFor="">Username, email, or mobile</label>
            <input type="text" id="userId" name="userId" />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p>
            Hi welcome to the yahoo <span> {userId}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
