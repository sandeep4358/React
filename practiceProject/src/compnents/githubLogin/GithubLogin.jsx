import GHButton from "../button/GHButton";
import styles from "./GithubLogin.module.css";
const GithubLogin = () => {
  const onSignIn = () => {
    console.log("testing............");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="images/GitHub-Logo.png" alt="logo" />
        </div>

        <div className={styles.heading}>
          <h1> Sign in to GitHub</h1>
        </div>
        <form action="{onSignIn}">
          <section className={styles.form}>
            <div className={styles.form_controller}>
              <label htmlFor="user_id">Username or email address</label>
              <input type="text" id="user_id" name="user_id" />
            </div>
            <div className={styles.form_controller}>
              <label htmlFor="password">Password</label>
              <input type="text" id="password" name="password" />
            </div>
            <a href="/password_reset">Forget password</a>
            <GHButton text="Sign in"></GHButton>
          </section>
        </form>
        <section className={styles.create_account}>
          <a href=""> Sign in with a passkey</a>
          <p>
            New to GitHub? <a href="">Create an account</a>
          </p>
        </section>
      </div>
    </>
  );
};

export default GithubLogin;
